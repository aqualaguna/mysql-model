import QueryBuilder from "./QueryBuilder";

export default class DeleteBuilder {
    collumns: Array<string> = [];
    get query () : string {
        let result = `DELETE FROM ${this.table_name} ` + this.qb.toString();
        return result;
    }
    constructor(protected table_name: string, protected qb : QueryBuilder) {

    }
};
