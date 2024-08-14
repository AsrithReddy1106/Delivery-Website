import orderModel from "../models/orderModels.js";
import userModel from '../models/userModels.js'

//placing order from front end

const placeOrder = async(req,res)=>{

    
    try {

        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,

        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});


        res.json({success:true,message:"order recieved"})
    } catch (error) {
        console.log(error);
        res.json({success:false,error:"Unknown error occurred"})
        
    }
}
export {placeOrder}