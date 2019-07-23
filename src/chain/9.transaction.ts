import RelationLayer from "./8.relation";
import { PoolConnection, Pool } from "mysql";
import { handleReject } from "../error/handleReject";

export default class TransactionLayer extends RelationLayer {
    protected static transactionConnection : PoolConnection | null = null;

    static async beginTransaction() : Promise<boolean>{
        return await (new Promise((resolve, reject) => {
             super.getConnectionPool().getConnection((err, connection) => {
                if (err) {
                    reject(err)
                }
                resolve(connection)
            })
        })).then((connection : any) => {
            this.transactionConnection = connection;
            (this.transactionConnection as PoolConnection).beginTransaction((err) => {
                if(err) {
                    throw err;
                }
            })
            return true;
        })
        .catch(handleReject)
    }

    static getConnectionPool (): any {
        if (this.transactionConnection) {
            return this.transactionConnection;
        } else {
            return super.getConnectionPool();
        }
    }

    static commit (): Promise<boolean> {
        if (this.transactionConnection) {
            return new Promise((resolve, reject) => {
                (this.transactionConnection as PoolConnection).commit((err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                })
            })
        }
        return Promise.resolve(false);
    }

    static rollback (): Promise<boolean> {
        if (this.transactionConnection) {
            return new Promise((resolve, reject) => {
                (this.transactionConnection as PoolConnection).rollback((err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                })
            })
        }
        return Promise.resolve(false);
    }

}