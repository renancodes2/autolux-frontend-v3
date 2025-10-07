"use client"

import { useAuth } from "@/context/auth_context";
import Link from "next/link";
import { useState, useRef, useEffect } from "react"; 
import { FaUser } from "react-icons/fa";
import { FiLoader, FiLogOut, FiMenu, FiX } from "react-icons/fi";

type DomMouseEvent = globalThis.MouseEvent;

export function Header(){

  const { user, isLoading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const menuRef = useRef<HTMLElement>(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    function handleClickOutside(event: DomMouseEvent) {
      if (
        isMenuOpen && 
        menuRef.current && 
        menuRef.current.contains instanceof Function && 
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    
  }, [isMenuOpen]);
  
  const navLinks = (
    <>
      <Link
      href="#"
      className="p-2 w-full md:w-auto" 
      onClick={() => setIsMenuOpen(false)}
      >
        Comprar carro
      </Link>
      {user?.role === "ADMIN" && 
        <Link 
          href="#" 
          className="p-2 w-full md:w-auto" 
          onClick={() => setIsMenuOpen(false)}
          >
            Adicionar carro
        </Link>
      }
      <Link 
      href="#" 
      className="p-2 w-full md:w-auto" 
      onClick={() => setIsMenuOpen(false)}
      >
        Financiar carro
      </Link>
      <Link 
        href="/services" 
        className="p-2 w-full md:w-auto" 
        onClick={() => setIsMenuOpen(false)}
      >
        Serviços
      </Link>
    </>
  );

  return (
    <header 
        className="w-full border-b border-[#909090] relative z-99 bg-white" 
        ref={menuRef}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 md:px-0">
        <div>
          <Link href="/" className="font-bold text-xl text-[#606060]">
            AutoLux
          </Link>
        </div>
 
        <nav className="hidden md:flex items-center font-medium gap-6 flex-1 justify-center">
          {navLinks}
        </nav>  
        
        <div className="flex items-center gap-4">
          <div className="animate-spin">
            {isLoading && <FiLoader size={24} color="#121212" />}
          </div>

          {!isLoading && user && <FiLogOut size={24} color="#121212" />}

          {!isLoading && !user && <FaUser size={24} color="#121212" />}

          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      <div className={`md:hidden absolute top-14 left-0 w-full bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-60 opacity-100 border-t border-[#909090]' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-start font-medium p-4 space-y-2">
          {navLinks}
        </nav> 
      </div>
    </header>
  );
}