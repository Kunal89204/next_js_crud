const { default: books } = require("@/app/models/Books.model");
const { NextResponse } = require("next/server");
const connectDB = require('@/app/libs/db/connectDB')


export async function GET(req, {params}){
    await connectDB();

    const {id} = params

    const updatedBook = await books.findById(id)
    return NextResponse.json(updatedBook)
}