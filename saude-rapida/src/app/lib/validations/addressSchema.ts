import { z } from "zod";

export const addressSchema = z.object({
    number: z.string().optional(),
    street: z.string().optional(),
    district: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    cep: z.string().optional(),
})

export type AddressSchema = z.infer<typeof addressSchema>;