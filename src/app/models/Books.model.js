import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    yearpublished: Number,
    coverimg: String
    
}, {timestamps: true})

const books = mongoose.models.books || mongoose.model('books', bookSchema);
export default books;