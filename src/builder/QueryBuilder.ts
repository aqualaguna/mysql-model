import mysql from 'mysql';
import ValueNotValid from '../error/ValueNotValidError';
import { Base } from '../chain/1.base';
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
export enum LogicalOperator {
    and = 'AND',
    or = 'OR',
    xor = 'XOR',
}

export enum OrderByType {
    asc = 'ASC',
    desc = 'DESC',
}

export default class QueryBuilder extends Base{
    query: string = 'WHERE ';
    params: Array<any> = [];
    first: boolean = true; 


    private applyQuery(query: string, params: Array<any>) {
        this.query += query;
        this.params = this.params.concat(params);
        this.first = false;
    }
    getQueryString() {
        return mysql.format(this.query, this.params);
    }

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

    whereOr(field: string, operator: Operator|string|number, value : string|null|number|Function = null)  {
        return this.where(field, operator, value, LogicalOperator.or)
    }
    
    whereXor(field: string, operator: Operator|string|number, value : string|null|number|Function = null) {
        return this.where(field, operator, value, LogicalOperator.xor)
    }

    whereNull(field: string, logic: LogicalOperator = LogicalOperator.and)  {
        return this.where(field, Operator.isNull, null, logic)
    }

    whereNotNull(field: string, logic: LogicalOperator = LogicalOperator.and)  {
        return this.where(field, Operator.isNotNull, null, logic)
    }

    whereIn(field: string, value: Array<any>, logic: LogicalOperator = LogicalOperator.and) {
        return this.where(field, Operator.in, value, logic)
    }

    whereLike(field: string, value: string, logic: LogicalOperator = LogicalOperator.and)  {
        return this.where(field, Operator.like, value, logic)
    }

    orderBy(field: string, type: string | OrderByType = OrderByType.asc)  {
        this.query += `ORDER BY ?? ${type}`;
        this.params.push(field);
        return this;
    }

    limit (count: number) {
        if (this.query.match('LIMIT ')) {
            this.query.replace(/LIMIT [0-9]+/, `LIMIT ${count}`)
        } else {
            this.query += `LIMIT ${count}`;
        }
        return this;
    }
    
    reset() {
        this.query = 'WHERE ';
        this.params = [];
        this.first = true; 
    }
}