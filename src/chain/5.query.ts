import DeleteLayer from "./4.delete";
import QueryBuilder, { LogicalOperator, Operator } from "../builder/QueryBuilder";
import SelectBuilder from "../builder/SelectBuilder";
import UpdateBuilder from "../builder/UpdateBuilder";
import DeleteBuilder from "../builder/DeleteBuilder";
/**
 * this class for query 
 */

export default class QueryLayer extends DeleteLayer{
    protected qb : QueryBuilder = new QueryBuilder();
    // @ts-ignore
    protected sb : SelectBuilder = new SelectBuilder(this.constructor.getTableName(), this.qb);
    // @ts-ignore
    protected ub : UpdateBuilder = new UpdateBuilder(this.constructor.getTableName(), this.qb);
    // @ts-ignore
    protected db : DeleteBuilder = new DeleteBuilder(this.constructor.getTableName(), this.qb);

    static where(field: string, operator: Operator|string|number, value : string|null|number|Function = null, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        let temp = new this();
        return temp.qb.where(field, operator, value, logic);
    }

    static whereNull(field: string, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        let temp = new this();
        return temp.qb.whereNull(field, logic);
    }

    static whereNotNull(field: string, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        let temp = new this();
        return temp.qb.whereNotNull(field, logic);
    }

    static whereIn(field: string, value: Array<any>, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        let temp = new this();
        return temp.qb.whereIn(field, value, logic);
    }

    static whereLike(field: string, value: string, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        let temp = new this();
        return temp.qb.whereLike(field, value, logic);
    }

}