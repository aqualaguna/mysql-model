import { ReadLayer } from "./3.read";
import { handleReject } from "../error/handleReject";

/**
 * this class for implementing delete layer in CRUD procedure
 * 
 */

export default class DeleteLayer extends ReadLayer {
    /**
     * delete the current rows
     */
    public async delete() : Promise<boolean>{
        if (this.isExist) {
            // @ts-ignore
            if(!await this.constructor.deleting(this[this.constructor.primary_key])) {
                throw new Error('deleted denied');
            }
            return this.executeRawQuery(
                // @ts-ignore
                `DELETE FROM ${this.constructor.getTableName()} WHERE ${this.constructor.primary_key} = ?`,
                // @ts-ignore
                this[this.constructor.primary_key]
            )
            .then(result => {
                // @ts-ignore
                this.constructor.deleted(this[this.constructor.primary_key])
                return true;
            }).catch(handleReject);
        } else {
            throw new Error('this model does not exists yet in database');
        }
    }
    
    
    /**
     * delete all rows in table no trigger to event.
     * caution when using this function. this is not reversible
     */
    static async deleteAll() : Promise<number> {
        return this.executeRawQuery(
            // @ts-ignore
            `DELETE FROM ${this.getTableName()}`,
            null
        )
        .then((result : any) => {
            return result.results.affectedRows;
        }).catch(handleReject)
    }

    /**
     * delete multiple document in table no trigger to event
     * @param ids array of id or just id.
     */
    static async delete(ids: Array<string|number> | string|number) : Promise<number> {
        return this.executeRawQuery(
            // @ts-ignore
            `DELETE FROM ${this.getTableName()} WHERE ${this.primary_key} IN (?)`,
            [ids]
        )
        .then((data : any) => {
            return data.results.affectedRows;
        }).catch(handleReject)
    }

     /**
     * event before delete to execute. override this method to implement.
     */
    protected static async deleting(id: string|number) : Promise<boolean>{
        return true;
    }

    /**
     * event after delete to execute. override this method to implement.
     */
    protected static async deleted(id:string|number) : Promise<boolean>{
        return true;
    }
}