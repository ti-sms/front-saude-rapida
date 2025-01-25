import Image from "next/image";

export default function Login() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="bg-white w-[40rem] h-[40rem] shadow-2xl rounded-3xl flex items-center justify-center">
                <div className="w-1/2 bg-black h-full rounded-l-3xl">

                    <Image
                        aria-hidden
                        src="/images/login.png"
                        alt="Saúde Rápida"
                        width={700}
                        height={700}
                        className="w-full h-full object-cover rounded-l-lg"
                    />

                </div>
                <div className="w-1/2 p-2">
                    <h1 className="text-3xl font-bold mb-2 p-2">Login</h1>
                    <form className="flex flex-col space-y-4">
                        <input type="text" placeholder="Usuário" className="border border-gray-300 p-2 rounded-lg" />
                        <input type="password" placeholder="Senha" className="border border-gray-300 p-2 rounded-lg" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}