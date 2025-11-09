"use client";

import React, { useState } from "react";

interface Verse {
  verse: number;
  text: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Buscar en la Biblia</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe una palabra o frase"
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-700 text-white p-2 rounded-r hover:bg-blue-800 transition"
        >
          Buscar
        </button>
      </div>

      {loading && <p>Cargando resultados...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-2">
        {results.map((verse, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            <strong>{verse.verse}</strong>: {verse.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
