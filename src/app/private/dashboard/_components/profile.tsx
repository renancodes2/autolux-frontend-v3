"use client"

import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import TestProfile from "@/assets/testecar.png";
import { useAuth } from "@/context/authContext";

export function ContainerProfile(){

  const { user } = useAuth();
  return (
    <div className="w-full">
      <div className="w-full h-96 bg-gray-200 flex items-center justify-between px-40">
        <div className="flex flex-col justify-center items-center">
          <div className="border-1 border-gray-400 w-60 h-60 rounded-full relative">
            <Image 
              src={TestProfile}
              alt="test"
              fill={true}
              quality={100}
              priority={true}
              className="object-cover rounded-full"
            />
          </div>
          <h2 className="text-center text-2xl pt-4">{user?.name}</h2>
          <p className="text-center flex items-center gap-1">
            {user?.city && user?.state && <IoLocationSharp size={20} color="#121212"/>}
            {user && `${user?.city}, ${user?.state}`}
          </p>
        </div>
        <div>
          <h2>Hello</h2>
        </div>
      </div>
      <div className="flex items-center justify-between w-full border-1 border-gray-400 h-10">
        <Link href="#" className="flex-1 flex text-center border-r-1 h-full items-center justify-center hover:bg-gray-400 duration-300">
          Meus veiculos
        </Link>

        <Link href="#" className="flex-1 h-full flex items-center justify-center text-center border-r-1 hover:bg-gray-400 duration-300">
          Favoritos
        </Link>

        <Link href="#" className="flex-1 flex h-full items-center justify-center text-center border-r-1 hover:bg-gray-400 duration-300">
          Favoritos
        </Link>
      </div>
    </div>
  )
}
