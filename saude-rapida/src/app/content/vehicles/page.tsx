"use client";
import Filter from "@/app/components/Filter";
import { useState } from "react";

export default function Veihicles() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="w-full p-2">
        <Filter search={searchInput} setSearch={setSearchInput} />
      </div>
    </>
  );
}
