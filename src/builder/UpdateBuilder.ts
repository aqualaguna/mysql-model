import QueryBuilder from "./QueryBuilder";
import mysql from 'mysql';

export default class UpdateBuilder extends QueryBuilder {
    collumns: Array<string> = [];
    get query () : string {
        let result = `UPDATE ${this.table_name} set ? ` + this.qb.toString();
        return mysql.format(result, this.value);
    }
    constructor(protected cls: any, protected table_name: string, protected value: any) {
        super();
    }

    runUpdate(data:any) : Promise<boolean> {
        let query = this.query;
        return this.executeRawQuery(query, data)
        .then((data: any) => {
            console.log(data)
            this.qb.reset();
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
};
