import { Base } from "./1.base";
import { handleReject } from "../error/handleReject";


/**
 * this class for implementing creating layer in CRUD procedure
 * there is several method to create a document. first is assigning one by one and then save.
 * the other method is using create method or make method.
 */

export class CreateLayer extends Base {
     /**
     * save a model to mysql database. if reference exists update it if not create it.
     */
    async save () : Promise<boolean> {
        // sumarized the input
        let temp: any = {};
        for (const key of this.keys) {
            temp[key] = this[key];
        }
        if (this.isExist) {
            // update the existsing row
            // check timestamp
            if (this.timestamp) {
                temp[this.timestamp_field.updated_at] = this.markValue;
            }
            // @ts-ignore
            if (!(await this.constructor.updating(temp))) {
                throw new Error("creating permission denied.");
            }
            return this.executeRawQuery(
                // @ts-ignore
                `UPDATE ${this.constructor.getTableName()} SET ? WHERE ${this.constructor.primary_key} = ${this[this.constructor.primary_key]}`,
                temp
            ).then((result : any) => {
                this.isExist = true;
                // @ts-ignore
                this.constructor.updated(this[this.constructor.primary_key], this.toObject());
                return true;
            }).catch(handleReject)
        } else {
            // check timestamp
            if (this.timestamp) {
                temp[this.timestamp_field.created_at] = this.markValue;
                temp[this.timestamp_field.updated_at] = this.markValue;
            }
            //@ts-ignore
            if (!(await this.constructor.creating(temp))) {
                throw new Error("creating permission denied.");
            }
            // convert callback into promise
            return this.executeRawQuery(
                    // @ts-ignore
                    `INSERT INTO ${this.constructor.getTableName()} SET ?`,
                    temp
                )
                .then((data : any) => {
                    this.isExist = true;
                    // @ts-ignore
                    this[this.constructor.primary_key] = data.results.insertId;
                    //@ts-ignore
                    this.constructor.created(this[this.constructor.primary_key], this.toObject());
                    return true;
                }).catch(handleReject)
            // create new one
        }
        return false;
    }

    /**
     * create data from nothing
     * @param data object or Array<object>
     */
    static async create (data: any) : Promise<any> {
        //clean the data
        let temp :any;
        let attribute = (new this()).attribute;
        
        if(data instanceof Array) {
            // if an array create a task list
            let task = [];
            let result : any = [];
            for (const datum of data) {
                temp = {};
                for (const key of Object.keys(attribute)) {
                    // @ts-ignore
                    temp[key] = datum[key] || attribute[key];
                }

                if (!(await this.creating(temp))) {
                    throw new Error("creating permission denied.");
                }
                let res = new this();
                res.fill(temp);
                task.push(res.save());
                result.push(res);
            }
            return Promise.all(task).then(() => result).catch(() => [])
        } else {
            temp = {};
            for (const key of Object.keys(attribute)) {
                // @ts-ignore
                temp[key] = data[key] || attribute[key];
            }
            if (!(await this.creating(temp))) {
                throw new Error("creating permission denied.");
            }
            let res = new this();
            res.fill(temp);
            await res.save();
            return res;
        }
    }

    /**
     * set value for created instance model
     * @param data object to set value
     */
    fill(data: any) : void {
        Object.keys(data).forEach(key => {
            this[key] = data[key];
        });
    }

    /**
     * event before create to execute. override this method to implement.
     */
    protected static async creating(data: any) : Promise<boolean>{
        return true;
    }

    /**
     * event after create to execute. override this method to implement.
     */
    protected static async created(id:string, data: any) : Promise<boolean>{
        return true;
    }

    /**
     * event before update to execute. override this method to implement.
     */
    protected static async updating(data: any) : Promise<boolean>{
        return true;
    }

    /**
     * event after update to execute. override this method to implement.
     */
    protected static async updated(id:string, data: any) : Promise<boolean>{
        return true;
    }

}