import sql from 'mssql'

const dbSettings = {
    user :'pesso93',
    password:'pesso93',
    server:'ANGELACER',
    database:'webstore',
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