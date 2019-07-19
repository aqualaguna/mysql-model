import QueryBuilder from "./QueryBuilder";
import mysql from 'mysql';

export default class SelectBuilder extends QueryBuilder{
    collumns: Array<string> = [];
    get query () : string {
        let result = `SELECT ` + (this.collumns.length == 0 ? '*' : this.collumns.map(t => '`' + t + '`').join(',')) + ` FROM ${this.table_name} ` + this.qb.toString();
        return result;
    }
    constructor(protected cls: any, protected table_name: string) {
        super();
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


    async runGet() :Promise<any>{
        let query = this.query;

        return this.executeRawQuery(query, null)
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this.cls();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            this.qb.reset();
            this.sb.reset();
            return result;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    async runGetFirst() : Promise<any>{
        this.qb.limit(1);
        let query = this.query;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this.cls();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            this.qb.reset();
            this.sb.reset();
            return result.length == 1 ? result[0] : null;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }
};
