import mongoose from "mongoose";
mongoose.set('strictQuery', false)

export default async function connect(){
    
    mongoose.connect(process.env.ATLAS_URL)
    console.log("DB Connected");
}