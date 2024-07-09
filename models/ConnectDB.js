const mongoose = require('mongoose')


const ConnectDB = async() => {
    try{
     
        const con = await mongoose.connect(process.env.DB)

        if(con){
            console.log("Server Succesfuly COnected Database" , con.connection.host)
        }else{
            console.log("Something Went Wrong to Connect Database Please Try Again")
        }


    }catch(err){
        console.log("Error",err)
    }
}
module.exports = ConnectDB