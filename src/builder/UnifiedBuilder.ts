import QueryBuilder from "./QueryBuilder";
import mysql from 'mysql';

/**
 * class unififying select, update and delete builder.
 */
export default class UnifiedBuilder extends QueryBuilder {
    /**
     * get update query from query builder.
     */
    get updateQuery () : string {
        let result = `UPDATE ${this.cls.getTableName()} SET ? ` + this.getQueryString();
        return mysql.format(result, this.value);
    }

    /**
     * create a unified builder instance for query.
     * @param cls class of mysql model.
     */
    constructor(protected cls: any) {
        super();
    }

    /**
     * run update based on query builder.
     * @param data anything as long its json object and there existing collumn in mysql table associated.
     */
    runUpdate(data:any) : Promise<boolean> {
        let query = this.updateQuery;
        return this.executeRawQuery(query, data)
        .then((data: any) => {
            this.reset()
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
    /**
     * saving which collumn is queried.
     */
    collumns: Array<string> = [];

    /**
     * get select query with query builder.
     */
    get selectQuery () : string {
        let result = `SELECT ` + (this.collumns.length == 0 ? '*' : this.collumns.map(t => '`' + t + '`').join(',')) + ` FROM ${this.cls.getTableName()} ` + this.getQueryString();
        return result;
    }

    /**
     * reset the query to nothing
     */
    reset() {
        super.reset();
        this.collumns = [];
    }

    /**
     * select without escape method.
     * @param value string for selected collumn
     */
    selectRaw(value: string) {
        let result = value.split(',').map(val => mysql.escape(val.trim()));
        this.collumns = result;
    }

    /**
     * select collumn specific.
     * @param value collumn or array of collumn.
     */
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

    /**
     * run select query.
     */
    async runGet() :Promise<any>{
        console.log(this.cls.getTableName);
        let query = this.selectQuery;
        console.log(query);
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

    /**
     * run select query with limit = 1.
     */
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

    /**
     * get delete query with query builder.
     */
    get deleteQuery () : string {
        let result = `DELETE FROM ${this.cls.getTableName()} ` + this.getQueryString();
        return result;
    }

    /**
     * run delete query.
     */
    runDelete() {
        let query = this.deleteQuery;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            this.reset();
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
};
