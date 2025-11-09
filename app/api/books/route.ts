import { NextRequest, NextResponse } from "next/server";
import booksData from "@/data/books.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(booksData);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
