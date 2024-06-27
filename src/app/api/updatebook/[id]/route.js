import { NextResponse } from "next/server"
import connectDB from '@/app/libs/db/connectDB';
import books from '@/app/models/Books.model';

export async function PUT(req, { params }) {
    await connectDB();
    const body = await req.json();
    const { id } = params

    //   let  {title, author, yearpublished, coverimg} = body

    const updatedData = await books.findByIdAndUpdate(id, body)






    return NextResponse.json({ updatedData, status: "data updated successfully" })
}