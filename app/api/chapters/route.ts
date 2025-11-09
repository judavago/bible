import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const bookId = req.nextUrl.searchParams.get("bookId");
    if (!bookId) throw new Error("No se proporcionó bookId");

    const chapters = Array.from({ length: 50 }, (_, i) => ({
      id: `${bookId}-${i + 1}`,
      reference: `${bookId} ${i + 1}`,
    }));

    return NextResponse.json(chapters);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
