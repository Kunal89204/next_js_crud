import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/nextjs")
        .then(() => {
            console.log("database connected")
        })
        .catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectdb;