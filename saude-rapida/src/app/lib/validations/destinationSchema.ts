import { z } from "zod";
import { addressSchema } from "./addressSchema";

export const destinationSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional(),
    addressSchema,

});

export type DestinationSchema = z.infer<typeof destinationSchema>;