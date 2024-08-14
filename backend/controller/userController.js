import userModel from "../models/userModels.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user

const loginUser = async(req,res) =>{
   const {email,password} = req.body
   try {
    const user = await userModel.findOne({email});

    if(!user){
        return res.json({success:false,messsage:"User does not exist."})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({success:false,messsage:"Password is incorrect."})
    }

    const token = createToken(user._id);
    res.json({success:true,token})

   } catch (error) {
    console.log(error);
    res.json({success:false, message:"user doesnt exit"})    
   }
}

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET )
}

const registerUser = async(req,res) => {
    const {name,email,password} = req.body;
    try {
        // checking if email is already registered
        const exists=await userModel.findOne({email});
        if (exists){
            return res.json({success:false,message:"user already exits"})
        }

        // validating email format and strong passwords
        if (!validator.isEmail(email)){
            return res.json({success:false,message:"invalid email format"}) 
        }
        if(password.lenth<8){
            return res.json({success:false,message:"please enter a strong password"})
        }

        // hashing user passwords
        const salt = await bcrypt.genSalt(10)
        
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }
}

export {loginUser,registerUser} 