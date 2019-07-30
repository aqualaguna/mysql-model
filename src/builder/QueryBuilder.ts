import mysql from 'mysql';
import ValueNotValid from '../error/ValueNotValidError';
import { Base } from '../chain/1.base';
/**
 * operator for comparing two attribute or collumn.
 */
export enum Operator {
    equal = '=',
    greater = '>',
    greaterThan = '>=',
    less = '<',
    lessThan = '<=',
    notEqual = '<>',
    like = 'like',
    isNull = 'IS NULL',
    in = 'in',
    isNotNull = 'IS NOT NULL',
}

/**
 * logical operator
 */
export enum LogicalOperator {
    and = 'AND',
    or = 'OR',
    xor = 'XOR',
}

/**
 * order by type.
 */
export enum OrderByType {
    asc = 'ASC',
    desc = 'DESC',
}

/**
 * class used for limiting record which affected by a query.
 */
export default class QueryBuilder extends Base{
    /**
     * full query string
     */
    query: string = 'WHERE ';
    /**
     * parameter which compliment query.
     */
    params: Array<any> = [];
    /**
     * flag for marking first time in query. for determine using the logical operator or not.
     */
    first: boolean = true; 

    /**
     * applying a query with param
     * @param query string of query
     * @param params parameter for query.
     */
    private applyQuery(query: string, params: Array<any>) {
        this.query += query;
        this.params = this.params.concat(params);
        this.first = false;
    }
    /**
     * debugging purpose only used to get full formated query string.
     */
    getQueryString() {
        return mysql.format(this.query, this.params);
    }

    /**
     * where operator for limiting the query.
     * @param field collumn in mysql table.
     * @param operator operator =, <>, > , >= , < , <=, like, IS NULL, IS NOT NULL, IN. or just enum from operator.
     * @param value value to compare. default null.
     * @param logic logical operator if needed. default 'and'.
     */
    where(field: string, operator: Operator|string|number, value : any = null, logic: LogicalOperator = LogicalOperator.and) {
        let temp = '';
        let params : any = [];
        // logical operator
        if (!this.first) {
            temp += logic + ' ';
        }
        // field
        temp += field + ' ';
        // operator
        switch(operator) {
            case Operator.notEqual : 
            case Operator.greater : 
            case Operator.greaterThan : 
            case Operator.less : 
            case Operator.lessThan : 
            case Operator.like : 
            case Operator.equal : 
                temp += operator + ' ? ';
            break;

            case Operator.isNull : 
            case Operator.isNotNull : 
                temp += operator;
            break;
            case Operator.in:
                temp += operator + ' (?) ';
                if (!Array.isArray(value)) {
                    throw new ValueNotValid('Operator in required value tobe array.');
                }
            break;
            default: 
                temp += Operator.equal + ' ? ';
                params.push(operator);
                this.applyQuery(temp, params);
                return this;
            break;
        }
        // value
        if (!(operator == Operator.isNotNull || operator == Operator.isNull)) {
            params.push(value);
        }
        this.applyQuery(temp, params);
        return this;
    }
    /**
     * where with or logical operator.
     * @param field collumn in mysql table.
     * @param operator operator.
     * @param value value to compare.
     */
    whereOr(field: string, operator: Operator|string|number, value : string|null|number|Function = null)  {
        return this.where(field, operator, value, LogicalOperator.or)
    }
    
    /**
     * where with xor logical operator.
     * @param field collumn in mysql table.
     * @param operator operator.
     * @param value value to compare.
     */
    whereXor(field: string, operator: Operator|string|number, value : string|null|number|Function = null) {
        return this.where(field, operator, value, LogicalOperator.xor)
    }

    /**
     * where null :attribute
     * @param field collumn in mysql table.
     * @param logic logical operator.
     */
    whereNull(field: string, logic: LogicalOperator = LogicalOperator.and)  {
        return this.where(field, Operator.isNull, null, logic)
    }

    /**
     * where not null :attribute
     * @param field collumn in mysql table.
     * @param logic logical operator.
     */
    whereNotNull(field: string, logic: LogicalOperator = LogicalOperator.and)  {
        return this.where(field, Operator.isNotNull, null, logic)
    }

    /**
     * where in operator.
     * @param field collumn in mysql table
     * @param value array of value
     * @param logic logic operator
     */
    whereIn(field: string, value: Array<any>, logic: LogicalOperator = LogicalOperator.and) {
        return this.where(field, Operator.in, value, logic)
    }

    /**
     * where like :attribute
     * @param field collumn in mysql table.
     * @param value value to compare
     * @param logic logic operator
     */
    whereLike(field: string, value: string, logic: LogicalOperator = LogicalOperator.and)  {
        return this.where(field, Operator.like, value, logic)
    }

    /**
     * order by field.
     * @param field collumn in mysql
     * @param type  'asc' or 'desc'
     */
    orderBy(field: string, type: string | OrderByType = OrderByType.asc)  {
        this.query += `ORDER BY ?? ${type}`;
        this.params.push(field);
        return this;
    }

    /**
     * limiting how many row the results.
     * @param count limit count.
     */
    limit (count: number) {
        if (this.query.match('LIMIT ')) {
            this.query.replace(/LIMIT [0-9]+/, `LIMIT ${count}`)
        } else {
            this.query += `LIMIT ${count}`;
        }
        return this;
    }
    
    /**
     * reset query builder
     */
    reset() {
        this.query = 'WHERE ';
        this.params = [];
        this.first = true; 
    }
}