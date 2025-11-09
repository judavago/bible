import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const chapterReference = req.nextUrl.searchParams.get("chapterId");
    if (!chapterReference) throw new Error("No se proporcionó chapterId");

    const res = await fetch(
      `https://bible-api.com/${encodeURIComponent(chapterReference)}`
    );
    if (!res.ok) throw new Error("Error al obtener versículos");

    const data = await res.json();
    return NextResponse.json(data.verses ?? []);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
