const express = require('express')
const ConnectDB = require('./models/ConnectDB')
const env = require('dotenv')
env.config()
const cors = require('cors')




const app = express()
app.use(express.json())
ConnectDB()
app.use(cors({
    origin:'*'
}))

app.use('/' , require('./routes/server'))


app.listen(4000 , console.log("Server Launched Succesfully"))





