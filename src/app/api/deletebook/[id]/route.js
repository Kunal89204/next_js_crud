const { default: books } = require("@/app/models/Books.model");
const { NextResponse } = require("next/server");
const connectDB = require("@/app/libs/db/connectDB")

export async function DELETE(req, {params}){
    await connectDB();
    const {id} = params

    const deletedbook = await books.findByIdAndDelete(id)
    return NextResponse.json({deletedbook})
}