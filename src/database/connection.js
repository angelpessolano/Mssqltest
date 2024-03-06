import sql from 'mssql'
import { DB_NAME,SERVER_NAME,DB_USER,DB_PASSWORD } from "../config";

const dbSettings = {
    user :DB_USER,
    password:DB_PASSWORD,
    server:SERVER_NAME,
    database:DB_NAME,
    options:{
    encrypt: true,
    trustServerCertificate: true

    }
    
}

export async function getConnection(){

    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.error(error)
    }



// const result = await pool.request().query("SELECT 1")
// console.log(result);
}
//getConnection();

export {sql};