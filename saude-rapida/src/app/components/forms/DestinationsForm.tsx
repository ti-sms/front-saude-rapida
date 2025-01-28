import { DestinationSchema } from "@/app/lib/validations/destinationSchema";
import { vehicleSchema } from "@/app/lib/validations/vehicleSchema";
import cepService from "@/app/services/cepService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function VehiclesForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DestinationSchema>({
    resolver: zodResolver(vehicleSchema),
  });

  const onSubmit = (data: DestinationSchema) => {
    console.log("Form Data:", data);
  };

  const getFormErrorMessage = (name: keyof DestinationSchema) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : null;

  const cep: any = useWatch({
    control,
    name: "addressSchema.cep",
  });

  useEffect(() => {
    setValue("addressSchema.cep", "");
  }, []);

  async function handleCepRequest() {
    try {
      const address = await cepService.fetchAddress(cep);
      alert("Deu bom");
      console.log(address);
    } catch (error) {
      alert("Deu ruim");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Fieldset legend="Dados do destino" className="w-full  ">
          <div className="flex space-x-2">
            <div className="field w-1/2">
              <label htmlFor="name" className="block text-lg font-medium">
                Nome
              </label>
              <InputText
                id="name"
                {...register("name")}
                className={classNames(
                  { "p-invalid": errors.name },
                  "w-full rounded-lg"
                )}
                placeholder="Insira a marca"
              />
              {getFormErrorMessage("name")}
            </div>
            <div className="field w-1/2">
              <label
                htmlFor="description"
                className="block text-lg font-medium"
              >
                Descrição
              </label>
              <InputText
                id="description"
                {...register("description")}
                className={classNames(
                  { "p-invalid": errors.description },
                  "w-full rounded-lg"
                )}
                placeholder="Insira o descrição"
              />
              {getFormErrorMessage("description")}
            </div>
          </div>
        </Fieldset>
        <Fieldset legend="Endereço" className="w-full">
          <div className="flex space-x-2">
            <div className="field">
              <label
                htmlFor="addressSchema.cep"
                className="block text-lg font-medium"
              >
                CEP
              </label>
              <InputText
                id="addressSchema.cep"
                {...register("addressSchema.cep")}
                className={classNames(
                  { "p-invalid": errors.addressSchema?.cep },
                  "w-full rounded-lg"
                )}
                placeholder="Insira o CEP"
                maxLength={8}
                onBlur={handleCepRequest}
              />
              {getFormErrorMessage("addressSchema")}
            </div>
          </div>
        </Fieldset>
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
