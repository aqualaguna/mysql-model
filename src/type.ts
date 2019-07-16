import mysql from 'mysql';

var now = mysql.raw('CURRENT_TIMESTAMP()');


export {
    now
}