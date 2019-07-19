import DeleteLayer from "./4.delete";
import QueryBuilder, { LogicalOperator, Operator } from "../builder/QueryBuilder";
import SelectBuilder from "../builder/SelectBuilder";
import UpdateBuilder from "../builder/UpdateBuilder";
import DeleteBuilder from "../builder/DeleteBuilder";
import UnifiedBuilder from "../builder/UnifiedBuilder";
/**
 * this class for query 
 */

export default class QueryLayer extends DeleteLayer{
    
    static where(field: string, operator: Operator|string|number, value : string|null|number|Function = null, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this.constructor);
        temp.where(field, operator, value, logic);
        return temp;
    }

    static whereNull(field: string, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this.constructor);
        temp.whereNull(field, logic);
        return temp;
    }

    static whereNotNull(field: string, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.whereNotNull(field, logic);
        return temp;
    }

    static whereIn(field: string, value: Array<any>, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.whereIn(field,value, logic);
        return temp;
    }

    static whereLike(field: string, value: string, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.whereLike(field,value, logic);
        return temp;
    }

    static selectRaw(query : string) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.selectRaw(query);
        return temp;
    }
    static select(value : string | string[]) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.select(value);
        return temp;
    }

}