import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:password1234567@cluster0.rbd6dpu.mongodb.net/ANTEIKU-REACT-PROJECT').then(()=>{
        console.log("DB Connected")
    })
}