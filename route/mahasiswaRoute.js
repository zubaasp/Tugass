//ketuju, tempat untuk endpoint dan nentuin url API
const express = require('express')
const router = express.Router()
const mahasiswaControler = require('../controlers/mahasiswaControlers')

router.get('/', mahasiswaControler.getMahasiswa)
router.post('/', mahasiswaControler.addMahasiswa)
router.delete('/:id', mahasiswaControler.deleteMahasiswa)
router.put('/:id', mahasiswaControler.updateMahasiswa)

module.exports = router