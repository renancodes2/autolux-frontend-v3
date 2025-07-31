"use client"

import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiLoader, FiLogOut } from "react-icons/fi";

export function Header(){

  const { user, isLoading } = useAuth();

  return (
    <header className="w-full border-b-1 border-[#909090]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-11">
        <div>
          <Link href="/" className="font-bold text-xl text-[#606060]">
            AutoLux
          </Link>
        </div>
        <nav className="flex items-center font-medium gap-6">
          <Link href="#">Comprar carro</Link>
          <Link href="#">Adiconar carro</Link>
          <Link href="#">Financiar carro</Link>
          <Link href="#">Serviços</Link>
        </nav>  
        <div>
          <div className="animate-spin">
            {isLoading && <FiLoader size={24} color="#121212" />}
          </div>

          {!isLoading && user && <FiLogOut size={24} color="#121212" />}

          {!isLoading && !user && <FaUser size={24} color="#121212" />}

        </div>
      </div>
    </header>
  )
}
