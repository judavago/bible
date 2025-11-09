"use client";

import React, { useState } from "react";

interface Verse {
  reference: string;
  text: string;
}

export default function VersePage() {
  const verses: Verse[] = [
    { reference: "Salmos 23:1", text: "El Señor es mi pastor, nada me faltará." },
    { reference: "Filipenses 4:13", text: "Todo lo puedo en Cristo que me fortalece." },
    { reference: "Juan 3:16", text: "Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito..." },
    { reference: "Proverbios 3:5", text: "Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia." },
    { reference: "Romanos 8:28", text: "Sabemos que Dios dispone todas las cosas para el bien de quienes lo aman." },
    { reference: "Isaías 41:10", text: "No temas, porque yo estoy contigo; no te desalientes, porque yo soy tu Dios." },
    { reference: "Josué 1:9", text: "Esfuérzate y sé valiente. No temas ni desmayes, porque el Señor tu Dios estará contigo." },
    { reference: "Mateo 5:9", text: "Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios." },
    { reference: "Salmos 46:1", text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
    { reference: "1 Corintios 13:4", text: "El amor es paciente, es bondadoso; el amor no tiene envidia ni se jacta." },
    { reference: "Salmos 119:105", text: "Lámpara es a mis pies tu palabra y lumbrera a mi camino." },
    { reference: "Juan 14:6", text: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí." },
    { reference: "Romanos 12:12", text: "Alégrense en la esperanza, sean pacientes en el sufrimiento, perseveren en la oración." },
    { reference: "Efesios 4:32", text: "Sean bondadosos y compasivos unos con otros, perdonándose mutuamente." },
    { reference: "Salmos 91:2", text: "Diré yo al Señor: Esperanza mía y castillo mío; mi Dios, en quien confiaré." },
    { reference: "Mateo 6:33", text: "Busquen primero el reino de Dios y su justicia, y todo lo demás les será añadido." },
    { reference: "Proverbios 16:3", text: "Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán." },
    { reference: "Juan 8:12", text: "Yo soy la luz del mundo; el que me sigue no andará en tinieblas." },
    { reference: "Salmos 37:4", text: "Deléitate asimismo en el Señor, y Él te concederá las peticiones de tu corazón." },
    { reference: "Hebreos 11:1", text: "La fe es la certeza de lo que se espera, la convicción de lo que no se ve." },
  ];

  const [currentVerse, setCurrentVerse] = useState<Verse>(
    verses[Math.floor(Math.random() * verses.length)]
  );

  const handleNext = () => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    setCurrentVerse(randomVerse);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">📖 Verso del Día</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <p className="text-gray-800 italic text-lg mb-4">"{currentVerse.text}"</p>
        <p className="text-sm text-blue-600 font-semibold">{currentVerse.reference}</p>
      </div>

      <button
        onClick={handleNext}
        className="mt-6 px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        🔁 Mostrar otro verso
      </button>
    </div>
  );
}
