import QueryBuilder from "./QueryBuilder";
import mysql from 'mysql';

export default class SelectBuilder {
    collumns: Array<string> = [];
    get query () : string {
        let result = `SELECT ` + (this.collumns.length == 0 ? '*' : this.collumns.map(t => '`' + t + '`').join(',')) + ` FROM ${this.table_name} ` + this.qb.toString();
        return result;
    }
    constructor(protected table_name: string, protected qb : QueryBuilder) {

    }
    reset() {
        this.collumns = [];
    }

    selectRaw(value: string) {
        let result = value.split(',').map(val => mysql.escape(val.trim()));
        this.collumns = result;
    }

    select (value: Array<string>|string) {
        let result;
        if (Array.isArray(value)) {
            result = value.map(val => mysql.escape(value));
        } else {
            result = [mysql.escape(value)];
        }
        if (result) {
            this.collumns = result;
        }
    }
};
