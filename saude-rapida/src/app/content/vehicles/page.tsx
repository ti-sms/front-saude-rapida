"use client";
import Filter from "@/app/components/Filter";
import { LoginForm } from "@/app/components/forms/LoginForm";
import VehiclesForm from "@/app/components/forms/VehiclesForm";
import FormModal from "@/app/components/modals/FormModal";
import { VehicleSchema } from "@/app/lib/validations/vehicleSchema";
import { actionsTemplate } from "@/app/templates/actionTemplates";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

export default function Veihicles() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [veihicles, setVeihicles] = useState<VehicleSchema[]>([]);
  const [resgisterVisible, setResgisterVisible] = useState(false)
  ;

 

  const columns = [
    { field: "brand", header: "Marca" },
    { field: "model", header: "Modelo" },
    { field: "plate", header: "Placa" },
    { field: "status", header: "Status" },
  ];

  useEffect(() => {
    setVeihicles([
      {
        brand: "Fiat",
        model: "Toro",
        plate: "pnp8769",
        status: true,
      },
    ]);
  }, []);
  console.log(veihicles[0]);

  return (
    <>
      <div className="w-full p-2 mr-2 space-y-2">
        <Filter search={searchInput} setSearch={setSearchInput} />
        <div
          id="content"
          className="bg-white h-[calc(100%-110px)] rounded-lg p-3"
        >
          <div className="flex justify-center ">
            <h1 className="text-4xl font-bold">Veículos</h1>
          </div>
          <div className=" w-full flex justify-end mt-32">
            <Button
              icon="pi pi-plus"
              label="Novo"
              iconPos="right"
              className="text-white font-bold shadow-md "
              severity="warning"
              onClick={() => setResgisterVisible(true)}
            />
          </div>
          <div className="mt-2 shadow-lg">
            <DataTable value={veihicles} tableStyle={{ minWidth: "50rem" }}>
              {columns.map((col) => {
                if (col.field === "status") {
                  return (
                    <Column
                      key={col.field}
                      field={col.field}
                      header={col.header}
                      body={(rowData) =>
                        rowData[col.field] ? "Ativo" : "Inativo"
                      }
                    />
                  );
                }
                return (
                  <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                  />
                );
              })}
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
        form={<VehiclesForm />}
        setVisible={setResgisterVisible}
        title="Cadastrar novo veiculo"
        visible={resgisterVisible}
      />
    </>
  );
}
