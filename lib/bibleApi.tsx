// 📁 lib/bibleApi.ts

import booksData from "@/data/books.json";

// Mapeo entre tus ids (en español) y los IDs que usa Bible API (BBE)
const bookIdMap: Record<string, string> = {
  genesis: "GEN",
  exodus: "EXO",
  leviticus: "LEV",
  numbers: "NUM",
  deuteronomy: "DEU",
  joshua: "JOS",
  judges: "JDG",
  ruth: "RUT",
  "1_samuel": "1SA",
  "2_samuel": "2SA",
  "1_kings": "1KI",
  "2_kings": "2KI",
  "1_chronicles": "1CH",
  "2_chronicles": "2CH",
  ezra: "EZR",
  nehemiah: "NEH",
  esther: "EST",
  job: "JOB",
  psalms: "PSA",
  proverbs: "PRO",
  ecclesiastes: "ECC",
  song_of_songs: "SNG",
  isaiah: "ISA",
  jeremiah: "JER",
  lamentations: "LAM",
  ezekiel: "EZK",
  daniel: "DAN",
  hosea: "HOS",
  joel: "JOL",
  amos: "AMO",
  obadiah: "OBA",
  jonah: "JON",
  micah: "MIC",
  nahum: "NAM",
  habakkuk: "HAB",
  zephaniah: "ZEP",
  haggai: "HAG",
  zechariah: "ZEC",
  malachi: "MAL",
  matthew: "MAT",
  mark: "MRK",
  luke: "LUK",
  john: "JHN",
  acts: "ACT",
  romans: "ROM",
  "1_corinthians": "1CO",
  "2_corinthians": "2CO",
  galatians: "GAL",
  ephesians: "EPH",
  philippians: "PHP",
  colossians: "COL",
  "1_thessalonians": "1TH",
  "2_thessalonians": "2TH",
  "1_timothy": "1TI",
  "2_timothy": "2TI",
  titus: "TIT",
  philemon: "PHM",
  hebrews: "HEB",
  james: "JAS",
  "1_peter": "1PE",
  "2_peter": "2PE",
  "1_john": "1JN",
  "2_john": "2JN",
  "3_john": "3JN",
  jude: "JUD",
  revelation: "REV",
};

// 📘 Obtener todos los libros
export async function getBooks() {
  return booksData;
}

// 📖 Obtener capítulos de un libro
export async function getChapters(bookId: string) {
  const bookCode = bookIdMap[bookId];
  if (!bookCode) throw new Error(`ID no reconocido: ${bookId}`);

  const url = `https://bible-api.com/data/bbe/${bookCode}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("No se pudieron obtener los capítulos");

  const data = await res.json();
  const chapters = data.chapters?.map((_: any, i: number) => ({
    id: `${bookId}-${i + 1}`,
    reference: `${bookId} ${i + 1}`,
  }));

  return chapters ?? [];
}

// 📜 Obtener versículos de un capítulo
export async function getVerses(bookId: string, chapterNumber: number) {
  const bookCode = bookIdMap[bookId];
  if (!bookCode) throw new Error(`ID no reconocido: ${bookId}`);

  const url = `https://bible-api.com/data/bbe/${bookCode}/${chapterNumber}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener versículos");

  const data = await res.json();
  return data.verses ?? [];
}

// 🔍 Buscar texto en la Biblia
export async function searchBible(query: string) {
  const res = await fetch(`https://bible-api.com/${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Error en la búsqueda");
  const data = await res.json();
  return data.verses ?? [];
}
