import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://project01:dKlsRD2COKibQDrE@cluster0.0x1d2cd.mongodb.net/food-del').then(()=>console.log('DB connected'))

}