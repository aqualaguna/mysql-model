import { CreateLayer } from "./2.create";

export class ReadLayer extends CreateLayer {
    /**
     * find document by id
     * @param ids Array of string / string. identification
     */
    static async find(ids: Array<string|number> | string|number) : Promise<any> {
        let query = '';
        if(Array.isArray(ids)) {
            // @ts-ignore
            query = `SELECT * FROM ${this.constructor.getTableName()} WHERE ${this.constructor.primary_key} IN (?)`;
            
        } else {
            // @ts-ignore
            query = `SELECT * FROM ${this.constructor.getTableName()} WHERE ${this.constructor.primary_key} = ?`;
        }
        return new Promise((resolve, reject) => {
            this.getConnectionPool().query(query, ids, function(err, results, fields) {
                if (err) {
                    reject(err);
                }
                resolve({
                    results,
                    fields
                })
            })
        })
        .then((data: any) => {
            return data.results;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    /**
     * get all data from collections
     */
    static async all(limit: number|undefined = undefined) {
        if (!limit) {
            // @ts-ignore
            limit = this.constructor.default_limit;
        }
        // @ts-ignore
        let query = `SELECT * FROM ${this.constructor.getTableName()} LIMIT ${limit}`;
        return new Promise((resolve, reject) => {
            this.getConnectionPool().query(query, null, function(err, results, fields) {
                if (err) {
                    reject(err);
                }
                resolve({
                    results,
                    fields
                })
            })
        })
        .then((data: any) => {
            return data.results;
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
            console.log(data);

        }
    }

    /**
     * query again to database with primary key
     */
    static async first() {
        return this.all(1);
    }
}