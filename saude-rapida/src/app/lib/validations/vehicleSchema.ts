import { z } from "zod";

export const vehicleSchema = z.object({
  id: z.string().optional(),
  brand: z.string(),
  model: z.string(),
  plate: z.string({
    required_error: "Placa e obrogatória",
  }),
});

export type VehicleSchema = z.infer<typeof vehicleSchema>;
