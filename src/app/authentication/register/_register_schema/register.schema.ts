import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, "Nome do Usuário é obrigatório"),
  email: z.string().email("E-mail inválido"),
  city: z.string().optional(),
  state: z.string().optional(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
  phone: z.string().optional(),
  profilePic: z.string().optional(),
}).refine(data => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });


export type RegisterData = z.infer<typeof registerSchema>