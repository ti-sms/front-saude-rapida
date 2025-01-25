import { z } from "zod";

export const loginSchema = z.object({
    login: z.string({message:"Login inválido"}),
    password: z.string({message:"Senha inválida"}).min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export type loginSchema = z.infer<typeof loginSchema>