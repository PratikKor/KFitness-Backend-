import mongoose from "mongoose"

export const connectDb = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongoDb")
    }catch{
        console.log("error.",error.message)
        process.exit(1)
    }

} 