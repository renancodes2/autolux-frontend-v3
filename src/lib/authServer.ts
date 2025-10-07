import { getCookieServer } from './cookieServer';
import { api } from '@/services/api';

type User = {
  id: string;
  email: string;
  name: string;
  state: string;
  city: string;
}

export async function getInitialUser(): Promise<User | null> {
  const token = await getCookieServer();
  if (!token) return null;

  try {
    const res = await api.get('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data as User;
  } catch (err) {
    console.error("Erro ao buscar perfil do servidor:", err);
    return null;
  }
} 