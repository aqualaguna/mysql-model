import { Base } from "./1.base";
import { handleReject } from "../error/handleReject";


/**
 * this class for implementing creating layer in CRUD procedure
 * there is several method to create a document. first is assigning one by one and then save.
 * the other method is using create method or make method.
 */

export class CreateLayer extends Base {
     /**
     * save a model to mysql database. if reference exists update it if not create it.
     */
    async save () : Promise<boolean> {
        // sumarized the input
        let temp: any = {};
        for (const key of this.keys) {
            temp[key] = this[key];
        }
        if (this.isExist) {
            
        } else {
            // convert callback into promise
            return new Promise((resolve, reject) => {
                // @ts-ignore
                CreateLayer.getConnectionPool().query(`INSERT INTO ${this.constructor.getTableName()} SET ?`, temp, function (error, results, fields) {
                    if (error) reject(error);
                    resolve({
                        results,
                        fields
                    });
                });
            }).then((result) => {
                console.log(result);
                return true;
            }).catch(handleReject)
            // create new one
            
            
        }
        return true;
    }

}