//keempat dibuat, tempat dimana kita mengeksekusi perintah sql

const config = require('../config')
const mysql = require('mysql2/promise')

async function query (sql,params){
    const connection = await mysql.createConnection(config.db) //menghubungkan ke databasenya
    const [result,]=await connection.execute(sql,params) //await = sembari appnya berjalan datanya di ambil
    return result
}
module.exports = {
    query
}