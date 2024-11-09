"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const errorFromUrl = searchParams.get('error') || ''; 
  const [error, setError] = useState(errorFromUrl); 

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Tente fazer o login
    const result = await signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
      redirect: false, 
    });

    
    if (result) {
      
      if (result.error) {
        setError("Credenciais inválidas. Erro no login."); 
      } else {
        
        if (result.url) {
          window.location.href = result.url; 
        }
      }
    } else {
      
      setError("Ocorreu um erro ao tentar fazer login. Tente novamente.");
    }
  }

  return (
    <form
      onSubmit={login}
      className="bg-white p-12 rounded-lg w-96 max-w-full flex flex-col items-center gap-2 border border-black"
    >
      <h2 className="font-bold text-3xl mg-4 text-black mb-4">Faça seu login</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input-primary w-full border-black bg-white focus:bg-white text-black placeholder-black pr-10"
      />

      <input
        name="password"
        type="password"
        placeholder="Senha"
        className="input input-primary w-full border-black bg-white text-black placeholder-black pr-10" 
      />

      <button
        className="btn btn-primary w-full bg-indigo-700 text-base text-white border border-black transform transition-transform duration-200 hover:scale-105 hover:bg-indigo-700 hover:border-black"
        type="submit"
      >
        Login
      </button>

      <div className="text-center">
        <p className="text-black">
          Não tem uma conta?
          <a href="#!" className="text-blue-700"> Registre-se.</a>
        </p>
      </div>

      <div className="col-md-6 d-flex justify-content-center text-blue-700">
        <a href="#!">Esqueceu a senha?</a>
      </div>

      {}
      {error && <div className="text-red-700">{error}</div>}
    </form>
  );
}
