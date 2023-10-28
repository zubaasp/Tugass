//Pertama dibuat untuk ngejalanin node.jsnya/ express

const express = require("express")
const main = express()
const cors = require("cors")
const port = 3000
const mhsRoute = require('./route/mahasiswaRoute')
main.use(cors())
main.use(express.json())
main.use(express.urlencoded({
    extended:true
}))
main.use('/api/mahasiswa',mhsRoute)//url untuk mendapat segala data mahasiswa
main.use('/',(_,res)=>{
    res.send('<h1>server runing</h1>')
})
main.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})
