import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

interface FilterProps {
  search: string;
  setSearch: (args: string) => void;
}
export default function Filter({ search, setSearch }: FilterProps) {
  return (
    <div className="w-full h-24 bg-white shadow-xl rounded-lg flex items-center justify-center space-x-2">
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg"
      />
      <Button icon="pi pi-search" severity="warning" className="rounded-lg text-white"/>
    </div>
  );
}
