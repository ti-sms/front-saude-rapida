import { Button } from "primereact/button";

export const actionsTemplate = () => {
  return (
    <>
      <div className=" space-x-2">
        <Button icon="pi pi-pencil" className="rounded-md" />
        <Button icon="pi pi-trash" severity="danger" className="rounded-md" />
      </div>
    </>
  );
};
