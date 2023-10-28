//ketiga, bisa buat apa aja klo ini fungsinya cuman buat nampilin agar tidak null jika data tidak ada

function emptyOrRows(rows){
    if (!rows) return []
    return rows

}
module.exports = {
    emptyOrRows
}