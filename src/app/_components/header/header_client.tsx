'use client'

import { usePathname } from 'next/navigation';
import { Header } from './header';

export function HeaderClient() {
  const pathname = usePathname();

  const isLoginOrRegister = pathname === "/authentication/login" || pathname === "/authentication/register";

  return !isLoginOrRegister ? <Header /> : null;
}
