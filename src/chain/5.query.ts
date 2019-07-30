import DeleteLayer from "./4.delete";
import QueryBuilder, { LogicalOperator, Operator } from "../builder/QueryBuilder";
import UnifiedBuilder from "../builder/UnifiedBuilder";
/**
 * this class for query 
 */

export default class QueryLayer extends DeleteLayer{
    /**
     * where query.
     * @param field collumn in mysql
     * @param operator operator like <. <>, >, >=, <= , like, in
     * @param value anything work.
     * @param logic and or xor
     */
    static where(field: string, operator: Operator|string|number, value : string|null|number|Function = null, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.where(field, operator, value, logic);
        return temp;
    }

    /**
     * where null :attribute.
     * @param field collumn in mysql
     * @param logic and, or, xor
     */
    static whereNull(field: string, logic: LogicalOperator = LogicalOperator.and) : UnifiedBuilder {
        let temp = new UnifiedBuilder(this);
        temp.whereNull(field, logic);
        return temp;
    }

    /**
     * where not null :attribute.
     * @param field collumn in mysql
     * @param logic and, or, xor
     */
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