"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function BibleMenu() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-wrap justify-around items-center shadow-md text-sm sm:text-base">
      <Link href="/bible/verse" className="hover:underline font-semibold">
        📜 Versículo del día
      </Link>
      <Link href="/bible/search" className="hover:underline font-semibold">
        📚 Buscar pasaje
      </Link>
      <Link href="/bible/keyword" className="hover:underline font-semibold">
        🔎 Palabra clave
      </Link>
      <Link href="/bible/reflection" className="hover:underline font-semibold">
        🙏 Reflexión
      </Link>
      {user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      ) : (
        <Link
          href="/login"
          className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600"
        >
          Iniciar sesión
        </Link>
      )}
    </nav>
  );
}
