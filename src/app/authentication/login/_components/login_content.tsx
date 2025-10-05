'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { api } from '@/services/api'
import { LoginData, loginSchema } from '../_login_schema/login_schema'
import { Input } from '../../_components/input/input'


export function LoginContent(){
   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()

  const onSubmit = async (data: LoginData) => {
    try {

      const response = await api.post('/auth/login', {
        email: data.email.trim(),
        password: data.password.trim(),
      })

      const expireTime = 60 * 60 * 24 * 30;

      setCookie('session', response.data.token, {
        maxAge: expireTime,
        path: '/',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
      })

      router.push('/private/dashboard')

    } catch (err) {
      console.error(err)
      return;
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl mt-10 px-4">
      <h1 className="font-bold text-3xl text-gray-800">Bem-vindo de volta!</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-10">
        <div>
          <Input
            name="email"
            type="text"
            placeholder="Digite o email"
            id="email"
            register={register}
            error={errors?.email}
          />
        </div>

        <div>
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            id="password"
            register={register}
            error={errors?.password}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}