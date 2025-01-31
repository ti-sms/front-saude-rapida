import { addressSchema } from "@/app/lib/validations/addressSchema";
import { DestinationSchema } from "@/app/lib/validations/destinationSchema";
import cepService from "@/app/services/cepService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import {
  Control,
  Controller,
  UseFormSetValue,
  useWatch,
} from "react-hook-form";
interface addressFormProps {
  control: Control<DestinationSchema>;
  setValue: UseFormSetValue<DestinationSchema>;
}

export default function AddressForm({ control, setValue }: addressFormProps) {
  const cep: any = useWatch({
    control,
    name: "addressSchema.cep",
  });
  async function handleCepRequest() {
    try {
      const address = await cepService.fetchAddress(cep);
      setValue("addressSchema.city", address.localidade);
      setValue("addressSchema.district", address.bairro);
      setValue("addressSchema.state", address.uf);
      setValue("addressSchema.street", address.logradouro);
    } catch (error) {
      return;
    }
  }

  return (
    <>
      <div className="w-full">
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
                <Controller
                  control={control}
                  name="addressSchema.cep"
                  render={({ field }) => (
                    <>
                      <InputText
                        {...field}
                        className={classNames("w-full rounded-lg")}
                        placeholder="Insira o CEP"
                        maxLength={8}
                        onBlur={handleCepRequest}
                      />
                    </>
                  )}
                />
              </div>
              <div className="field w-1/3">
                <label
                  htmlFor="addressSchema.state"
                  className="block text-lg font-medium"
                >
                  Estado
                </label>
                <Controller
                  control={control}
                  name="addressSchema.state"
                  render={({ field }) => (
                    <>
                      <InputText
                        {...field}
                        className={classNames("w-full rounded-lg")}
                        placeholder="Insira o estado"
                        disabled
                      />
                    </>
                  )}
                />
              </div>
              <div className="field w-1/3">
                <label
                  htmlFor="addressSchema.city"
                  className="block text-lg font-medium"
                >
                  Cidade
                </label>
                <Controller
                  control={control}
                  name="addressSchema.city"
                  render={({ field }) => (
                    <>
                      <InputText
                        {...field}
                        className={classNames("w-full rounded-lg")}
                        placeholder="Insira a cidade"
                        disabled
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="flex space-x-2 ">
              <div className="field w-1/3">
                <label
                  htmlFor="addressSchema.district"
                  className="block text-lg font-medium"
                >
                  Bairro
                </label>
                <Controller
                  control={control}
                  name="addressSchema.district"
                  render={({ field }) => (
                    <>
                      <InputText
                        {...field}
                        className={classNames("w-full rounded-lg")}
                        placeholder="Insira o bairro"
                        
                      />
                    </>
                  )}
                />
              </div>
              <div className="field w-1/3">
                <label
                  htmlFor="addressSchema.street"
                  className="block text-lg font-medium"
                >
                  Rua
                </label>
                <Controller
                  control={control}
                  name="addressSchema.street"
                  render={({ field }) => (
                    <>
                      <InputText
                        {...field}
                        className={classNames("w-full rounded-lg")}
                        placeholder="Insira a rua"
                       
                      />
                    </>
                  )}
                />
              </div>
              <div className="field w-1/3">
                <label
                  htmlFor="addressSchema.number"
                  className="block text-lg font-medium"
                >
                  Número
                </label>
                <Controller
                  control={control}
                  name="addressSchema.number"
                  render={({ field }) => (
                    <>
                      <InputText
                        {...field}
                        className={classNames("w-full rounded-lg")}
                        placeholder="Insira o número"
                       
                      />
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </Fieldset>
      </div>
    </>
  );
}
