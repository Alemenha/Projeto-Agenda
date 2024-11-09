"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton(){
    return (
       <button className="text-white border-black w-full p-2 rounded" onClick={() => signOut ()}>
          Sair
        </button>
    );
}