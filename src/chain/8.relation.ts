import UpdateLayer from "./7.update";
import * as changeCase from 'change-case';
import * as pluralize from 'pluralize';
export default class RelationLayer extends UpdateLayer {
    hasOne(cls : any, foreign_key: string|undefined = undefined) : Promise<any> {
        if (new cls instanceof RelationLayer) {
            // if is it based on mysql model
            // @ts-ignore
            let default_field = pluralize.singular(changeCase[this.constructor.collectionStyle](this.constructor.getTableName())) + '_id';
            if (foreign_key) {
                default_field = foreign_key;
            }
            // get the relation from cls
            // @ts-ignore
            return cls.where(default_field, '=', this[this.constructor.primary_key]).runGetFirst();
        } else {
            throw new Error('Class extend from mysql model must be provided.')
        }
    }

    hasMany(cls: any, through: any = undefined) :Promise<any> {
        if (new cls instanceof RelationLayer) {
            if(through == undefined || typeof through == "string") {
                // should be foreign with many to one relation ship
                // @ts-ignore
                let id = this[this.constructor.primary_key];
                // @ts-ignore
                let default_field = pluralize.singular(this.constructor.getTableName()) + '_id';
                if (through != undefined) {
                    default_field = through;
                }
                // @ts-ignore
                console.log(default_field, id, this.constructor.primary_key)
                return cls.where(default_field, '=', id).runGet();
            } else {
                if (new through instanceof RelationLayer) {
                    // should be many to many relationship.
                    return Promise.resolve(1);
                } else {
                    throw new Error('Class extend from mysql model must be provided.');        
                }
            }
        } else {
            throw new Error('Class extend from mysql model must be provided.');
        }

    }

    belongsTo(cls: any, foreign_key: string|undefined = undefined) : Promise<any> {
        if (new cls instanceof RelationLayer) {
            // if is it based on mysql model
            // @ts-ignore
            let default_field = pluralize.singular(cls.getTableName()) + '_id';
            if (foreign_key) {
                default_field = foreign_key;
            }
            console.log(default_field, this[default_field]);
            // get the relation from cls
            // @ts-ignore
            return cls.find(this[default_field]);
        } else {
            throw new Error('Class extend from mysql model must be provided.')
        }
    }
}