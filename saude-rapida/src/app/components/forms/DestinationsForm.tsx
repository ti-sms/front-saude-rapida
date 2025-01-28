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
    alert("Cadastrou")
  };

  const getFormErrorMessage = (name: keyof DestinationSchema) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : null;

  const cep: any = useWatch({
    control,
    name: "addressSchema.cep",
  });

  async function handleCepRequest() {
    try {
      const address = await cepService.fetchAddress(cep);
      setValue("addressSchema.city", address.localidade);
      setValue("addressSchema.neighborhood", address.bairro);
      setValue("addressSchema.state", address.uf);
      setValue("addressSchema.street", address.logradouro);
    } catch (error) {
      return;
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
          <div className="w-full">
            <div className="flex space-x-2 ">
              <div className="field w-1/3">
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
              <div className="field w-1/3">
                <label
                  htmlFor="addressSchema.cep"
                  className="block text-lg font-medium"
                >
                  Estado
                </label>
                <InputText
                  id="addressSchema.state"
                  {...register("addressSchema.state")}
                  className={classNames(
                    { "p-invalid": errors.addressSchema?.state },
                    "w-full rounded-lg"
                  )}
                  disabled
                />
                {getFormErrorMessage("addressSchema")}
              </div>
              <div className="field w-1/3 w-1/3">
                <label
                  htmlFor="addressSchema.cep"
                  className="block text-lg font-medium"
                >
                  Cidade
                </label>
                <InputText
                  id="addressSchema.city"
                  {...register("addressSchema.city")}
                  className={classNames(
                    { "p-invalid": errors.addressSchema?.city },
                    "w-full rounded-lg"
                  )}
                  disabled
                />
                {getFormErrorMessage("addressSchema")}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="field w-1/3">
                <label
                  htmlFor="neiborhood"
                  className="block text-lg font-medium"
                >
                  Bairro
                </label>
                <InputText
                  id="addressSchema.neiborhood"
                  {...register("addressSchema.neighborhood")}
                  className={classNames(
                    { "p-invalid": errors.addressSchema?.neighborhood },
                    "w-full rounded-lg"
                  )}
                  placeholder="Insira o nome do Bairro"
                />
                {getFormErrorMessage("addressSchema")}
              </div>
              <div className="field w-1/3">
                <label htmlFor="street" className="block text-lg font-medium">
                  Rua
                </label>
                <InputText
                  id="addressSchema.street"
                  {...register("addressSchema.street")}
                  className={classNames(
                    { "p-invalid": errors.addressSchema?.street },
                    "w-full rounded-lg"
                  )}
                  placeholder="Insira o nome da rua"
                />
                {getFormErrorMessage("addressSchema")}
              </div>
              <div className="field w-1/3">
                <label htmlFor="number" className="block text-lg font-medium">
                  Número
                </label>
                <InputText
                  id="addressSchema.number"
                  {...register("addressSchema.number")}
                  className={classNames(
                    { "p-invalid": errors.addressSchema?.number },
                    "w-full rounded-lg"
                  )}
                  placeholder="Insira o número"
                />
                {getFormErrorMessage("addressSchema")}
              </div>
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
