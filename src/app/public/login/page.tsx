'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { api } from '@/services/api'
import { AxiosError } from 'axios'

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
})

type LoginData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()
  const [error, setError] = useState('')

  const onSubmit = async (data: LoginData) => {
    try {
      setError('')

      console.log('Tentando login com:', data.email, data.password)

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

    } catch (err: unknown) {
      console.error(err)
      setError('E-mail ou senha inválidos.')
      const error = err as AxiosError;
      console.error('Erro no login:', error?.response?.data || error.message)
      return;
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="E-mail"
            {...register('email')}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Senha"
            {...register('password')}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

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