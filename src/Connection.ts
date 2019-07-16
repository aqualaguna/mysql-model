import * as mysql from 'mysql';

/**
 * @class Connection
 * @description used for managing connection using singleton pattern.
 */

export default class Connection {
    static pool : mysql.Pool;
    static connection: mysql.Connection;
    static host: string = 'localhost';
    static user: string = 'root';
    static password: string = '';
    static database: string= 'mysql';
    static port: number = 3306;
    /**
     * set credential for using mysql database
     * @param host where the mysql is hosted
     * @param user username
     * @param password password for authentication
     * @param database which database to choose
     */
    static setCredential(
        host: string,
        user: string,
        password: string,
        database: string,
        port: number = 3306) {
            Connection.host = host;
            Connection.user = user;
            Connection.password = password;
            Connection.database = database;
            Connection.port = port;
    }
    /**
     * get connection instance.
     */
    static getInstance() : mysql.Connection {
        if (!Connection.connection) {
            Connection.connection = mysql.createConnection({
                supportBigNumbers   : true,
                port                : this.port,
                host                : this.host,
                user                : this.user,
                password            : this.password,
                database            : this.database
            });
            
            Connection.connection.connect((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('connected to database');
                }
            });
        }

        return Connection.connection;
    }

    /**
     * get pool and init pool.
     * @param connection_limit 
     */
    static getPool(connection_limit : number = 10) : mysql.Pool {
        if (!Connection.pool) {
            Connection.pool =  mysql.createPool({
                supportBigNumbers   : true,
                connectionLimit     : connection_limit,
                host                : this.host,
                port                : this.port,
                user                : this.user,
                password            : this.password,
                database            : this.database
            });
        }
        return Connection.pool;
    }


    /**
     * disconect the connection.
     */
    static disconnect() {
        return Connection.connection.end(console.log)
    }

}