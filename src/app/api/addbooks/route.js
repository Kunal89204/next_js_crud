import connectDB from '@/app/libs/db/connectDB';
import books from '@/app/models/Books.model';
import { NextResponse } from 'next/server';

export async function POST(req) {
    await connectDB();

    // Parse the request body
    const body = await req.json();
    const { title, author, yearpublished, coverimg } = body;

    const newBook = await books.create({ title, author, yearpublished, coverimg })

    // You can now use the parsed body
    return NextResponse.json({ newBook, status: "new book added" });
}
