"use client"
import Image from "next/image";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export default function Header() {
    const [user, setUser] = useState({
        name: "Neemias Araújo",
        userPermissions: ["admin"],
    });

    return (
        <>
            <div className="w-screen h-24 bg-amber-500 flex items-center shadow-2xl">
                <div className="mt-10 ml-2 p-3">
                    <Image
                        aria-hidden
                        src="/images/logo_branca.png"
                        alt="Saúde Rápida"
                        width={180}
                        height={120}
                        className="mb-10" 
                    />
                </div>
                <div className="flex justify-end w-full m-3 space-x-2 p-3">
                    <div className="text-white flex items-center">
                        <p className="">{user.name}</p>
                    </div>
                    <Dropdown options={user.userPermissions} value={user.userPermissions[0]} className="w-50"/>
                    <Button icon="pi pi-cog" className="" />
                    <Button icon="pi pi-sign-out" severity="danger" />
                </div>
            </div>
        </>
    )
}

