'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { api } from '@/services/api'

type User = {
  id: string;
  email: string;
  name: string;
  state: string;
  city: string;
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getUser(){
      const token = getCookie('session')
      if (!token) {
        setIsLoading(false)
        return
      }

      api.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setUser(res.data)
        })
        .catch(() => {
          setUser(null)
        })
        .finally(() => setIsLoading(false))
    }


    getUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

