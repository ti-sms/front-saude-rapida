import Image from "next/image";

export default function Page404() {
    return (
        <div className="w-full  h-[calc(100vh-115px)] flex items-center justify-center">
            <Image
                aria-hidden
                src="/afonsinho404.png"
                alt="Saúde Rápida"
                width={600}
                height={300}
               
            />
        </div>
    )
}