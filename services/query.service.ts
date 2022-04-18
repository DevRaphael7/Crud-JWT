import { MysqlError } from 'mysql';
import { connection_db } from './../database/connection';

export class Query {

    public found: boolean = false;

    public getTable = () => connection_db; 

    public select(query: string) {
        return new Promise((resolve, reject) => {
            connection_db.query(query, (error: MysqlError, rows: Array<any>) => {
                if(error) reject(JSON.stringify(error))
                resolve(rows)
            })
        })
    }

    public insert(query: string, data: any) {
        connection_db.query(query, data, (error) => {
            if(error) throw error
        })
    }

    public updateTask(query: string, values: any) {
        connection_db.query(query, values, (error) => {
            if(error) throw error;
        })
    }
}