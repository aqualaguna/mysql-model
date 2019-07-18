import { CreateLayer } from "./2.create";
import mysql from 'mysql';
export class ReadLayer extends CreateLayer {
    /**
     * find rows by id
     * @param ids Array of string / string. identification
     */
    static async find(ids: Array<string|number> | string|number) : Promise<any> {
        let query = '';
        if(Array.isArray(ids)) {
            // @ts-ignore
            query = `SELECT * FROM ${this.getTableName()} WHERE ${this.primary_key} IN (?)`;
        } else {
            // @ts-ignore
            query = `SELECT * FROM ${this.getTableName()} WHERE ${this.primary_key} = ?`;
        }
        this.executeRawQuery(
            query,
            [ids]
        )
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            switch(result.length) {
                case 0:
                    result = null;
                break;
                case 1:
                    result = result[0];
                break;
            }
            return result;
        }).catch(e => {
            console.log(e);
            return null;
        });
    }

    /**
     * get all data from table
     */
    static async all(limit: number|undefined = undefined) : Promise<any> {
        if (!limit) {
            // @ts-ignore
            limit = this.default_limit;
        }
        // @ts-ignore
        let query = `SELECT * FROM ${this.getTableName()} LIMIT ${limit}`;
        this.executeRawQuery(
            query,
            null
        )
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            return result;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    /**
     * query again to database with primary key
     */
    public async refresh() {
        if (this.isExist) {
            // @ts-ignore
            let id = this[this.constructor.primary_key];
            let data = await ReadLayer.find(id);
            this.fill(data.toObject());
        }
    }

    /**
     * query again to database with primary key
     */
    static async first() : Promise<any> {
        let result = await this.all(1)
        return result.length == 1 ? result[0] : null;
    }
}