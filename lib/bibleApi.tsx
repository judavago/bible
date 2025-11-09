// 📁 lib/bibleApi.tsx

// 📘 Obtener todos los libros
// Bible API no tiene endpoint de todos los libros, así que usamos un JSON local
import booksData from "@/data/books.json";

export async function getBooks() {
  // Retorna la lista de libros desde JSON local
  return booksData;
}

// 📖 Obtener capítulos de un libro
// Bible API no soporta endpoint de capítulos por libro
// Opcional: si quieres, puedes definir capítulos en JSON o mostrar referencia libre
export async function getChapters(bookId: string) {
  // Ejemplo: crear un array de capítulos del 1 al 50
  const chapters = Array.from({ length: 50 }, (_, i) => ({
    id: `${bookId}-${i + 1}`,
    reference: `${bookId} ${i + 1}`,
  }));
  return chapters;
}

// 📜 Obtener versículos de un capítulo
// Usamos Bible API con la referencia completa
export async function getVerses(chapterReference: string) {
  const res = await fetch(`https://bible-api.com/${encodeURIComponent(chapterReference)}`);
  if (!res.ok) throw new Error("Error al obtener versículos");
  const data = await res.json();
  return data.verses ?? []; // retorna un array de versículos
}

// 🔍 Buscar texto en la Biblia
export async function searchBible(query: string) {
  const res = await fetch(`https://bible-api.com/${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Error en la búsqueda");
  const data = await res.json();
  return data.verses ?? [];
}
