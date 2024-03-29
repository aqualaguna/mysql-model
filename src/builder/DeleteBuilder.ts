import QueryBuilder from "./QueryBuilder";

/**
 * @deprecated merged with UnifiedBuilder class
 */
export default class DeleteBuilder extends QueryBuilder {
    collumns: Array<string> = [];
    get query () : string {
        let result = `DELETE FROM ${this.table_name} ` + this.qb.toString();
        return result;
    }
    constructor(protected cls: any, protected table_name: string) {
        super();
    }
    runDelete() {
        let query = this.query;
        return this.executeRawQuery(query, null)
        .then((data: any) => {
            this.qb.reset();
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }
};
