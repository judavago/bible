import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get("q");
    if (!query) throw new Error("No se proporcionó query");

    const res = await fetch(`https://bible-api.com/${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("Error al buscar en la Biblia");

    const data = await res.json();
    return NextResponse.json(data.verses ?? []);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
