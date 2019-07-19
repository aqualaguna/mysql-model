import * as changeCase from 'change-case';
import { Pool } from 'mysql';
import Connection from '../Connection';
import { now } from '../type';
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
interface TimestampField {
    created_at: string;
    updated_at: string;
}
export class Base {
    protected timestamp : boolean = false;
    protected static primary_key : string = 'id';
    protected static default_limit : number = 500;
    protected timestamp_field : TimestampField = {
        created_at: 'created_at',
        updated_at: 'updated_at'
    };
    protected static table_name : string | null = null; 
    protected mark : string[] = [];
    protected markValue : any = now;
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
        if (this.table_name) {
            return this.table_name;
        }
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
        // @ts-ignore
        if (temp[this.constructor.primary_key]) {
            // @ts-ignore
            temp[this.constructor.primary_key] = this[this.constructor.primary_key];
        }
        return temp as object;
    }

    protected static async executeRawQuery(query: string,  params: any) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.getConnectionPool().query(query, params, function(error, results, fields) {
                if (error) {
                    reject(error);
                }
                resolve({
                    results,
                    fields
                });
            })
        })
    }

    protected async executeRawQuery(query: string,  params: any) : Promise<any> {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            this.constructor.getConnectionPool().query(query, params, function(error : any, results: any, fields: any) {
                if (error) {
                    reject(error);
                }
                resolve({
                    results,
                    fields
                });
            })
        })
    }
}