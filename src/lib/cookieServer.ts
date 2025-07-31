import { cookies } from 'next/headers'

export async function getCookieServer() {
  const cookieStore = await cookies()
  return cookieStore.get('session')?.value || null
}