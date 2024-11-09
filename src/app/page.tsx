"use client"; // Adiciona esta linha para indicar que é um client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToHomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/homepage'); // Redireciona para a homepage
  }, [router]);

  return null; // Retorna nada enquanto redireciona
}
