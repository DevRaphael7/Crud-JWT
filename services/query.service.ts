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
        connection_db.query(query, data, (error, res) => {
            if(error){
                console.log(error)
                throw error
            }
        })
    }
}