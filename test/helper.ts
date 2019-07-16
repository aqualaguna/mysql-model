import Connection from '../src/Connection';
import { Pool } from 'mysql';

export function connectToTestDatabase() : Pool {
    Connection.setCredential('0.0.0.0', 'user', 'password', 'test', 3307);
    return Connection.getPool();

}