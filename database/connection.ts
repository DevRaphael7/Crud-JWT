
import mysql from 'mysql';
import { config_database } from '@configs/database.config';

export const connection_db = mysql.createConnection(config_database)

connection_db.connect((err) => {
    if(err) {
        console.log("Error na conexão com banco de dados\n")
        console.log(err)
        return
    };
    console.log("Database is connected")
})