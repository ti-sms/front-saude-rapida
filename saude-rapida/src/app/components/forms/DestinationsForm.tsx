import {
  destinationSchema,
  DestinationSchema,
} from "@/app/lib/validations/destinationSchema";
import { vehicleSchema } from "@/app/lib/validations/vehicleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useForm, useWatch } from "react-hook-form";
import AddressForm from "./AddressForm";

export default function DestinationsForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DestinationSchema>({
    resolver: zodResolver(destinationSchema),
  });

  const onSubmit = (data: DestinationSchema) => {
    console.log("Form Data:", data);
    alert("Cadastrou");
  };

  const handleError = (errors: any) => {
    console.log("Erros no formulário:", errors);
  };

  const getFormErrorMessage = (name: keyof DestinationSchema) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : null;

  const cep: any = useWatch({
    control,
    name: "addressSchema.cep",
  });

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit, handleError)} className="flex flex-col gap-4">
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
        <AddressForm control={control} setValue={setValue} />
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
