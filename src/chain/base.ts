import * as changeCase from 'change-case';
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