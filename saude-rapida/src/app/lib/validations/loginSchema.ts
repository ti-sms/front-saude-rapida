import { z } from "zod";

export const LoginSchema = z.object({
    login: z.string({message:"Login inválido"}),
    password: z.string({message:"Senha inválida"}).min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export type LoginSchema = z.infer<typeof LoginSchema>