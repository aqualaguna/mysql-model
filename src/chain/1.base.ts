import * as changeCase from 'change-case';
import { Pool } from 'mysql';
import Connection from '../Connection';
/// <reference path="change-case/change-case.d.ts" />
/**
 * enumeration for style of name collection
 * eg. classname = UserDetail
 */
export enum CollectionCaseType {
    /**
     * ConstantCase = 'USER_DETAIL'
     */

    ConstantCase ='constant',
    /**
     * SnakeCase = 'user_detail'
     */
    SnakeCase = 'snake',
    /**
     * CamelCase = 'userDetail'
     */
    CamelCase = 'camel',
    /**
     * HeaderCase = 'Header-Case'
     */
    HeaderCase = 'header',
    /**
     * ParamCase = 'user-detail'
     */
    ParamCase = 'param',
    /**
     * Pascal = 'ParamCase'
     */
    PascalCase = 'pascal'
}

export class Base {
    protected timestamp : boolean = true;
    protected mark : string[] = [];
    protected markValue : any = 'CURRENT_TIMESTAMP';
    protected unmarkValue : any = null;
    protected isExist: boolean = false;
    /**
     * set a default collection naming convention
     */
    protected static collectionStyle : CollectionCaseType = CollectionCaseType.SnakeCase;
    protected attribute: any;

    /**
     * keys of existed in attribute the value is Object.keys(attribute)
     */
    protected keys!: string[];
    [key: string]: any;


    /**
     * get tablename by class name
     */
    static getTableName(type: CollectionCaseType = this.collectionStyle): string {
        
        return changeCase[type](this.name);
    }

    static getConnectionPool (): Pool {
        return Connection.getPool();
    }
     /**
     * convert this instance to simple object
     */
    toObject() : object {
        let temp : any = {};
        for (const key of this.keys) {
            temp[key] = this[key];
        }
        return temp as object;
    }
}