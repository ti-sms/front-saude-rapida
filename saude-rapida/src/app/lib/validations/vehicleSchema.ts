import { z } from "zod";

export const vehicleSchema = z.object({
  id: z.string().optional(),
  brand: z.string(),
  model: z.string(),
  plate: z.string({
    message: "Placa é obrigatória",
  }),
  status: z.boolean({
    message: "Status é obrigatório",
  }),
});

export type VehicleSchema = z.infer<typeof vehicleSchema>;
