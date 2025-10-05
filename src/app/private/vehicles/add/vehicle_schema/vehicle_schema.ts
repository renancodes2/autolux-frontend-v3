import z from "zod";

export const carSchema = z.object({
  name: z.string().min(3, { message: "Nome do carro é obrigatório e deve ter pelo menos 3 caracteres." }),
  description: z.string().min(0, { message: "O campo descrição é obrigatório!" }),
  model: z.string().min(1, { message: "Modelo é obrigatório!" }),
  price: z.string().min(0, { message: "Preço deve ser um valor positivo!" }),
  year: z.string().min(0, { message: "O ano deve ser maior que 1900!" }),
  km: z.string().min(0, { message: "O KM não pode ser negativo!" }),
  color: z.string().min(0, { message: "Você precisa colocar uma cor!" }),
  transmission: z.string().min(0, { message: "O campo Transmissão é obrigatório!" }),
  city: z.string().min(0, { message: "O campo cidade é obrigatório!" }),
  state: z.string().min(0, { message: "O campo estado é obrigatório!" }),
  country: z.string().min(0, { message: "O campo Pais é obrigatório!" }),
  licensePlate: z.string().min(0, { message: "" }),
  engine: z.string().min(0, { message: "O campo é obrigatório!" }),
  categoryId: z.string().min(1, { message: "A categoria é obrigatória!" }),
  brandId: z.string().min(1, { message: "A marca é obrigatória!" }),
})

export type CarFormInputs = z.infer<typeof carSchema>;