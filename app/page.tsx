"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir directamente al login
    router.push("/login");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50 text-gray-800">
      <p>Cargando...</p>
    </div>
  );
}
