"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getVerses } from "@/lib/bibleApi";

export default function VersesPage() {
  const searchParams = useSearchParams();
  const chapterRef = searchParams.get("ref") || "";

  const [verses, setVerses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!chapterRef) return;

    getVerses(chapterRef)
      .then((data) => setVerses(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [chapterRef]);

  if (!chapterRef) return <p className="p-4">No se ha seleccionado un capítulo.</p>;
  if (loading) return <p className="p-4">Cargando versículos...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{chapterRef}</h1>
      <ul className="space-y-2">
        {verses.map((verse) => (
          <li key={verse.verse} className="p-2 bg-gray-100 rounded">
            <strong>{verse.verse}</strong>: {verse.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
