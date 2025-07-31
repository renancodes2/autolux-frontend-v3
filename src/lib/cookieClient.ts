'use client'

import { getCookie } from 'cookies-next'

export function getCookieClient() {
  return getCookie('session') || null
}