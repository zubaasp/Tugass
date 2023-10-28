//keenam, ngejalanin perintah sql dan nghandle jika error
const mhsService = require("../services/mahasiswaService")
const mahasiswaControlers = {
    getMahasiswa: async (req, res, next) => {
      try {
        res.json(await mhsService.getMahasiswa()) 
  
      } catch (error) {
        console.error("Error while getting mahasiswa" , error.message)
        next(error)
      }
    },
    addMahasiswa: async (req, res, next) => {
      try {
        res.json(await mhsService.addMahasiswa(req.body)) 
  
      } catch (error) {
        console.error("Error while adding mahasiswa" , error.message)
        next(error)
      }
    },
    deleteMahasiswa: async (req, res, next) => {
      try {
        res.json(await mhsService.deleteMahasiswa(req.params.id)) 
  
      } catch (error) {
        console.error("Error while delete mahasiswa" , error.message)
        next(error)
      }
    },
    updateMahasiswa: async (req, res, next) => {
      try {
        res.json(await mhsService.updateMahasiswa(req.params.id,req.body)) 
  
      } catch (error) {
        console.error("Error while update mahasiswa" , error.message)
        next(error)
      }
    }



}
module.exports = mahasiswaControlers