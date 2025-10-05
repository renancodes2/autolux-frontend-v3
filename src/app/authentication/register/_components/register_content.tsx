"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterData, registerSchema } from "../_register_schema/register.schema"
import { useForm } from "react-hook-form"
import { FaCar } from "react-icons/fa";
import { Input } from "../../_components/input/input";
import { api } from "@/services/api";
import Link from "next/link";



export function RegisterContent(){
  const router = useRouter();
  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm<RegisterData>({
      resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterData) => {

    const createUser = {
      name: data?.name,
      email: data?.email,
      city: data?.city || null,
      state: data?.state || null,
      phone: data?.phone || null,
      profilePic: data?.profilePic || null,
      password: data?.password

    }
    try {
      const response = await api.post("/users", createUser);

      console.log('Usuário registrado com sucesso:', response.data);

      router.push("/authentication/login")
      
    } catch (error) {
     console.log(error)
    }
  };

  
  return (
    <div className="mx-auto w-full max-w-2xl mt-10 px-4">
      <div className="flex items-center justify-center gap-3">
        <h2 className="font-bold text-3xl text-gray-800">
          Bem-vindo! Crie sua Conta
        </h2> 
        <span>
          <FaCar size={35} color="#8c9cac"/>
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="flex flex-col">
          <label htmlFor="name">Digite seu nome:*</label>
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            id="name"
            register={register}
            error={errors?.name}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="">Digite seu Email:*</label>
          <Input
            name="email"
            type="text"
            placeholder="Digite seu email"
            id="register"
            register={register}
            error={errors?.email}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="">Digite sua senha:*</label>
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              id="password"
              register={register}
              error={errors?.password}
            />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="">confirme sua senha:*</label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="confirme sua senha"
              id="confirmPassword"
              register={register}
              error={errors?.confirmPassword}
            />
        </div>

        <div className="flex flex-col md:flex-row md:gap-3 w-full">
          <div className="flex flex-col mt-4">
            <label htmlFor="">Cidade:*</label>
            <Input
              name="city"
              type="text"
              placeholder="Qual é sua cidade"
              id="city"
              register={register}
              error={errors?.city}
            />          
            </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="">Estado:*</label>
            <Input
              name="state"
              type="text"
              placeholder="Qual é seu estado"
              id="state"
              register={register}
              error={errors?.state}
            />
          </div>
        </div>

        <p className="text-center mt-6">Já possui conta? <Link href="/authentication/login" className="text-blue-600 font-bold">Click aqui</Link></p>

        <button type="submit" className="bg-blue-800 w-full h-10 font-bold text-[#ffffff] mt-4 rounded-md">
          Criar conta
        </button>
      </form>
    </div>
  )
}