import { ReadLayer } from "./3.read";
import { handleReject } from "../error/handleReject";

/**
 * this class for implementing delete layer in CRUD procedure
 * 
 */

export default class DeleteLayer extends ReadLayer {
    /**
     * delete the current document
     */
    public async delete() : Promise<boolean>{
        if (this.isExist) {
            // @ts-ignore
            if(!await this.constructor.deleting(this[this.constructor.primary_key])) {
                throw new Error('deleted denied');
            }
            return new Promise((resolve, reject) => {
                // @ts-ignore
                DeleteLayer.getConnectionPool().query(`DELETE FROM ${this.constructor.getTableName()} WHERE ${this.constructor.primary_key} = ?`, this[this.constructor.primary_key], function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }
                    resolve({
                        results,
                        fields
                    })
                })
            }).then(result => {
                console.log(result);
                // @ts-ignore
                this.constructor.deleted(this[this.constructor.primary_key])
                return true;
            }).catch(handleReject);
        } else {
            throw new Error('this model does not exists yet in database');
        }
    }
    
    
    /**
     * delete all document in collection
     */
    static deleteAll() : Promise<boolean> {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            this.getConnetionPool().query(`DELETE FROM ${this.constructor.getTableName()}`, null, function(err, results, fields) {
                if(err) {
                    reject(err);
                }
                resolve({
                    results,
                    fields
                })
            })
        }).then(result => {
            console.log(result);
            return true;
        }).catch(handleReject)
    }

     /**
     * event before delete to execute. override this method to implement.
     */
    protected static async deleting(id: string|number) : Promise<boolean>{
        return true;
    }

    /**
     * event after delete to execute. override this method to implement.
     */
    protected static async deleted(id:string|number) : Promise<boolean>{
        return true;
    }
}