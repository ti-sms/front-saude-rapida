import {
  VehicleSchema,
  vehicleSchema,
} from "@/app/lib/validations/vehicleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useForm, useWatch } from "react-hook-form";

export default function VehiclesForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VehicleSchema>({
    resolver: zodResolver(vehicleSchema),
  });

  const status = useWatch({
    control,
    name: "status",
  });

  const onSubmit = (data: VehicleSchema) => {
    console.log("Form Data:", data);
  };

  const getFormErrorMessage = (name: keyof VehicleSchema) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : null;

  console.log(status);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex space-x-2">
          <div className="field w-1/2">
            <label htmlFor="brand" className="block text-lg font-medium">
              Marca
            </label>
            <InputText
              id="brand"
              {...register("brand")}
              className={classNames(
                { "p-invalid": errors.brand },
                "w-full rounded-lg"
              )}
              placeholder="Insira a marca"
            />
            {getFormErrorMessage("brand")}
          </div>
          <div className="field w-1/2">
            <label htmlFor="model" className="block text-lg font-medium">
              Modelo
            </label>
            <InputText
              id="model"
              {...register("model")}
              className={classNames(
                { "p-invalid": errors.model },
                "w-full rounded-lg"
              )}
              placeholder="Insira o modelo"
            />
            {getFormErrorMessage("model")}
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="field w-1/2">
            <label htmlFor="plate" className="block text-lg font-medium">
              Placa
            </label>
            <InputText
              id="plate"
              {...register("plate")}
              className={classNames(
                { "p-invalid": errors.plate },
                "w-full rounded-lg"
              )}
              placeholder="Insira a placa"
            />
            {getFormErrorMessage("plate")}
          </div>
          <div className="field w-1/2">
            <label htmlFor="status" className="block text-lg font-medium">
              Status
            </label>
            <Dropdown
              id="status"
              value={status} // Usa o valor observado do campo
              onChange={(e) => setValue("status", e.value)} // Atualiza o valor no formulário
              className={classNames(
                { "p-invalid": errors.status },
                "w-full rounded-lg"
              )}
              options={[
                { label: "Ativo", value: true },
                { label: "Inativo", value: false },
              ]}
              placeholder="Selecione o status"
            />
            {errors.status && (
              <small className="p-error">{errors.status.message}</small>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            label="Entrar"
            className="text-white "
            severity="warning"
          />
        </div>
      </form>
    </>
  );
}
