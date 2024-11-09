"use client";

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-black/75 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl ml-10">Rotina</h1>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          ☰
        </button>
        <div className="flex-grow flex justify-center items-center">
          <div className={`space-x-12 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <Link 
              href="/homepage" 
              className="text-white px-4 py-2 hover:bg-blue-500 rounded underline decoration-indigo-500 underline-offset-4"
            >
              Início
            </Link>
            <span className="text-white px-4 py-2 hover:bg-blue-500 rounded underline decoration-indigo-500 underline-offset-4 cursor-not-allowed">
              Sobre
            </span>
            <Link 
              href="https://github.com/Alemenha?tab=repositories" 
              className="text-white px-4 py-2 hover:bg-blue-500 rounded underline decoration-indigo-500 underline-offset-4"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Projetos
            </Link>
            <span className="text-white px-4 py-2 hover:bg-blue-500 rounded underline decoration-indigo-500 underline-offset-4 cursor-not-allowed">
              Suporte
            </span>
          </div>
        </div>
        <Link 
          href="/login" // Altere aqui para redirecionar para a página de login
          className="bg-indigo-600 text-white px-12 py-1 rounded hover:bg-indigo-700 mr-10" 
        >
          Entrar
        </Link>
      </div>
    </nav>
  )
}
