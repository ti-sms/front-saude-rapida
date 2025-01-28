"use client";
import Filter from "@/app/components/Filter";
import DestinationsForm from "@/app/components/forms/DestinationsForm";
import FormModal from "@/app/components/modals/FormModal";
import { DestinationSchema } from "@/app/lib/validations/destinationSchema";
import { actionsTemplate } from "@/app/templates/actionTemplates";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

export default function Destinations() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [destinations, setDestinations] = useState<DestinationSchema[]>([]);
  const [resgisterVisible, setResgisterVisible] = useState(false);

  useEffect(() => {
    setDestinations([
      {
        name: "Foz do Iguaçu",
        description: "Cataratas do Iguaçu",
        addressSchema: {
          number: "123",
          street: "Rua das flores",
          district: "Centro",
          city: "Foz do Iguaçu",
          state: "PR",
          cep: "85851-230",
        },
      },
    ]);
  }, []);

  return (
    <>
      <div className="w-full p-2 mr-2 space-y-2">
        <Filter search={searchInput} setSearch={setSearchInput} />
        <div
          id="content"
          className="bg-white h-[calc(100%-110px)] rounded-lg p-3"
        >
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold">Destinos</h1>
          </div>
          <div className="w-full flex justify-end mt-32">
            <Button
              icon="pi pi-plus"
              label="Novo"
              iconPos="right"
              className="text-white font-bold shadow-md"
              severity="warning"
              onClick={() => setResgisterVisible(true)}
            />
          </div>
          <div className="mt-2 shadow-lg">
            <DataTable value={destinations} tableStyle={{ minWidth: "50rem" }}>
              <Column field="name" header="Nome" />
              <Column
                header="Endereço"
                body={(rowData) =>
                  `${rowData.addressSchema.street}, ${rowData.addressSchema.number} - ${rowData.addressSchema.district}`
                }
              />
              <Column field="description" header="Descrição" />
              <Column
                body={actionsTemplate}
                className="actions-column"
                align={"right"}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
      <FormModal
        form={<DestinationsForm />}
        visible={resgisterVisible}
        setVisible={setResgisterVisible}
        title="Novo Destino"
      />
    </>
  );
}
