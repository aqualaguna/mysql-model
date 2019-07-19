import QueryBuilder from "./QueryBuilder";
import mysql from 'mysql';

export default class UnifiedBuilder extends QueryBuilder {
    get updateQuery () : string {
        let result = `UPDATE ${this.cls.getTableName()} set ? ` + this.getQueryString();
        return mysql.format(result, this.value);
    }
    constructor(protected cls: any) {
        super();
        console.log(this.cls);
    }

    runUpdate(data:any) : Promise<boolean> {
        let query = this.updateQuery;
        return this.executeRawQuery(query, data)
        .then((data: any) => {
            console.log(data)
            this.reset()
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
    collumns: Array<string> = [];
    get selectQuery () : string {
        console.log(this.cls);
        let result = `SELECT ` + (this.collumns.length == 0 ? '*' : this.collumns.map(t => '`' + t + '`').join(',')) + ` FROM ${this.cls.getTableName()} ` + this.getQueryString();
        console.log(result);
        return result;
    }

    reset() {
        super.reset();
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
        let query = this.selectQuery;

        return this.executeRawQuery(query, null)
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this.cls();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            this.reset();
            return result;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    async runGetFirst() : Promise<any>{
        this.limit(1);
        let query = this.selectQuery;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            let rows = data.results;
            let result = rows.map((row : any) => {
                let temp = new this.cls();
                temp.fill(row);
                temp.isExist = true;
                return temp;
            });
            this.reset();
            return result.length == 1 ? result[0] : null;
        }).catch(e => {
            console.log(e);
            return [];
        });
    }

    get deleteQuery () : string {
        let result = `DELETE FROM ${this.cls.getTableName()} ` + this.getQueryString();
        return result;
    }
    runDelete() {
        let query = this.deleteQuery;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            console.log(data)
            this.reset();
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
};
