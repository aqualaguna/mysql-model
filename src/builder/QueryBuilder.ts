import mysql from 'mysql';
export enum Operator {
    equal = '=',
    greater = '>',
    greaterThan = '>=',
    less = '<',
    lessThan = '<=',
    notEqual = '<>',
    like = 'like',
    isNull = 'IS NULL',
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

export default class QueryBuilder {
    query: string = 'WHERE ';
    params: Array<any> = [];
    first: boolean = true; 

    private applyQuery(query: string, params: Array<any>) {
        this.query += query;
        this.params = this.params.concat(params);
        this.first = false;
    }
    toString() {
        return mysql.format(this.query, this.params);
    }

    where(field: string, operator: Operator|string|number, value : string|null|number|Function = null, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
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
            case Operator.isNull : 
            case Operator.isNotNull : 
            case Operator.equal : 
                temp += operator + ' ? ';
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
            this.applyQuery(temp, params);
        }
        return this;
    }

    whereOr(field: string, operator: Operator|string|number, value : string|null|number|Function = null) : QueryBuilder {
        return this.where(field, operator, value, LogicalOperator.or)
    }
    
    whereXor(field: string, operator: Operator|string|number, value : string|null|number|Function = null) : QueryBuilder {
        return this.where(field, operator, value, LogicalOperator.xor)
    }

    whereNull(field: string, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        return this.where(field, Operator.isNull, null, logic)
    }

    whereNotNull(field: string, logic: LogicalOperator = LogicalOperator.and) : QueryBuilder {
        return this.where(field, Operator.isNotNull, null, logic)
    }

    orderBy(field: string, type: string | OrderByType = OrderByType.asc){
        this.query += `ORDER BY ?? ${type}`;
        this.params.push(field);
    }
    
}