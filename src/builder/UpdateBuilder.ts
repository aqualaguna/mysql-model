import QueryBuilder from "./QueryBuilder";
import mysql from 'mysql';

export default class UpdateBuilder {
    collumns: Array<string> = [];
    get query () : string {
        let result = `UPDATE ${this.table_name} set ? ` + this.qb.toString();
        return mysql.format(result, this.value);
    }
    constructor(protected table_name: string, protected value: any, protected qb : QueryBuilder) {

    }
};
