import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="bg-amber-500 w-64 h-[calc(100vh-115px)] m-2 rounded-2xl">
            <nav className="p-2 text-white">
                <ul>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-calendar"></i>
                                <p className="">Agendamentos</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-user"></i>
                                <p className="">Usuários</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-users"></i>
                                <p className="">Pacientes</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-car"></i>
                                <p className="">Veículos</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-building"></i>
                                <p className="">Destinos</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-arrow-right-arrow-left"></i>
                                <p className="">Histórico de viagens</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="hover:bg-amber-700 h-14 rounded-lg m-2 flex items-center p-2 bg-black bg-opacity-50 ">
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                <i className="pi pi-map-marker"></i>
                                <p className="">Locações</p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}