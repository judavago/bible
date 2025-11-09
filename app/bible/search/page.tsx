"use client";

import React, { useState } from "react";

// Lista simplificada de libros con algunos versículos (puedes expandirla luego)
const bibleData = [
  {
    book: "Génesis",
    verses: [
      "En el principio creó Dios los cielos y la tierra. (Génesis 1:1)",
      "Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza. (Génesis 1:26)",
      "No contenderá mi espíritu con el hombre para siempre. (Génesis 6:3)",
    ],
  },
  {
    book: "Éxodo",
    verses: [
      "Y habló Dios todas estas palabras, diciendo: Yo soy Jehová tu Dios. (Éxodo 20:1-2)",
      "Honra a tu padre y a tu madre. (Éxodo 20:12)",
      "El Señor peleará por vosotros, y vosotros estaréis tranquilos. (Éxodo 14:14)",
    ],
  },
  {
    book: "Salmos",
    verses: [
      "Jehová es mi pastor; nada me faltará. (Salmos 23:1)",
      "Lámpara es a mis pies tu palabra. (Salmos 119:105)",
      "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. (Salmos 91:1)",
    ],
  },
  {
    book: "Juan",
    verses: [
      "Porque de tal manera amó Dios al mundo. (Juan 3:16)",
      "Yo soy el camino, la verdad y la vida. (Juan 14:6)",
      "En el principio era el Verbo, y el Verbo era con Dios. (Juan 1:1)",
    ],
  },
  {
    book: "Romanos",
    verses: [
      "Todos pecaron y están destituidos de la gloria de Dios. (Romanos 3:23)",
      "El amor sea sin fingimiento. (Romanos 12:9)",
      "Si Dios es por nosotros, ¿quién contra nosotros? (Romanos 8:31)",
    ],
  },
];

export default function BibleSearchPage() {
  const [query, setQuery] = useState("");
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null);

  const filteredBooks = bibleData.filter((b) =>
    b.book.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectBook = (book: string) => {
    const bookData = bibleData.find((b) => b.book === book);
    if (bookData) {
      const randomVerse =
        bookData.verses[Math.floor(Math.random() * bookData.verses.length)];
      setSelectedVerse(randomVerse);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 p-4">
      <h1 className="text-2xl font-bold text-yellow-800 mb-4">🔍 Buscar Libro Bíblico</h1>

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Escribe el nombre del libro..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Lista de libros filtrados */}
      {query && (
        <ul className="mt-4 space-y-2">
          {filteredBooks.map((b) => (
            <li
              key={b.book}
              onClick={() => handleSelectBook(b.book)}
              className="bg-white p-3 rounded-lg shadow cursor-pointer hover:bg-yellow-100 transition"
            >
              📖 {b.book}
            </li>
          ))}

          {filteredBooks.length === 0 && (
            <p className="text-gray-500 text-center mt-3">
              No se encontró ningún libro con ese nombre.
            </p>
          )}
        </ul>
      )}

      {/* Mostrar verso aleatorio */}
      {selectedVerse && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-800 italic text-lg">"{selectedVerse}"</p>
        </div>
      )}
    </div>
  );
}
