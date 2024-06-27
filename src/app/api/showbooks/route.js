import connectDB from '@/app/libs/db/connectDB';
import books from '@/app/models/Books.model';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const mybooks = await books.find();
  return NextResponse.json({ mybooks });
}
