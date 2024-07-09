const jwt = require('jsonwebtoken')
const userDb = require('../modules/UserModule')
const bcrypt = require('bcrypt')




const Login = async(req,res) => {

    const {email , password} = req.body

    if(!email || !password){

        res.status(398).send("All Fields Are Mandatory")

    }else{
        const find = await userDb.find({email:email})

        if(find[0] !== undefined ){
            const username = find[0].username
            const id = find[0]._id
            const token = jwt.sign({email:email , username:username , id:id} , process.env.secretkey , {expiresIn:'1h'})
            
            res.json(token)
        }else{
            res.status(207).send("Password Or Email Is incorrect")
        }
    }

}

const Register = async(req,res) => {

    const {secure , password , username , email } = req.body
    
    if( !password || !username|| !email){
        res.json("Dont Try To Steal Any Information !!")
    }else{
        const find = await userDb.find({email:email})
        if(find[0] !== undefined){
            console.log("Duplicate Key")

            res.status(399).send("Duplicated Key")

        }else{
            const createnewUser = await userDb.create({
                username:username,
                password:password,
                email:email
            })
            if(createnewUser){
                console.log("New User" , username , "Succesfully Created")
                res.json("Succesfuly Created New User" , username)
            }
        }

       
    }




}
module.exports = {Register, Login}