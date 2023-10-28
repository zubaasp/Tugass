//kelima, tempat kumpulan2 untuk perintah sql crud

const db = require("./db")
const helper = require('../helper')
const config = require('../config')
async function getMahasiswa (){
    const rows = await db.query('select * from mahasiswa')
    const data = helper.emptyOrRows(rows)
    return {
        data
    }
}
async function addMahasiswa (mahasiswa){
    const query = await db.query(`insert into mahasiswa (nama,nim,jurusan) values('${mahasiswa.nama}','${mahasiswa.nim}','${mahasiswa.jurusan}')`)
    let message = "GAGAL MENAMBAHKAN DATA WOIIIII"
    if (query.affectedRows){
        message = "BERHASIL MENAMBAHKAN DATA WOII"
    }
    return{
         message
    }
}
async function deleteMahasiswa(id){
    const query = await db.query(`delete from mahasiswa where id = ${id}`)
    let message = "GAGAL MENGHAPUS DATA WOIIIII"
    if (query.affectedRows){
        message = "BERHASIL MENGHAPUS DATA WOII"
    }
    return{
         message
    }
}
async function updateMahasiswa(id,mahasiswa){ //mau id berapa klo mahasiswa yg d update gunanya buat data yg namanya sidiq 
    const query = await db.query(`update mahasiswa set nama='${mahasiswa.nama}',nim='${mahasiswa.nim}',jurusan='${mahasiswa.jurusan}' where id= ${id}`)
    let message = "GAGAL MENGUPDATE DATA WOIIIII"
    if (query.affectedRows){
        message = "BERHASIL MENGUPDATE DATA WOII"
    }
    return{
         message
    }
}

module.exports = {
    getMahasiswa, addMahasiswa, deleteMahasiswa, updateMahasiswa
}