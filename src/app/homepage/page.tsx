"use client";

import { useRouter } from 'next/navigation';
import './homepage.css';

export default function HomePage() {
  const router = useRouter();

  return (
    <div 
      style={{
        backgroundImage: 'url(/fundo.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '20px', 
      }}
    >
      <div style={{
        backgroundColor: 'rgba(75, 0, 130, 0.7)', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', 
      }}>
        <h1 className="text-5xl font-extrabold text-white">Gerencie sua Rotina de Forma Eficiente</h1>
        <p className="text-lg text-white">Organize seus horários e maximize sua produtividade.</p>
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Nossos Recursos</h2>
        <ul className="space-y-2 text-white">
          <li>📅 Agendamento de horários</li>
          <li>✅ Criação de listas de tarefas</li>
          <li>🔗 Integração com calendários</li>
        </ul>
      </section>

      <footer className="mt-8 text-white">
        <p>&copy; 2024 Seu Site de Rotinas</p>
      </footer>
    </div>
  );
}
