const express =require('express')
const { Register, Login } = require('../controllers/JWT')

const router = express.Router()


// Get Requests,



// Post Requests
router.post('/register' , Register)
router.post('/login' , Login)




module.exports = router


