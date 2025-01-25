import Image from "next/image";
import { Button } from "primereact/button";
import { LoginForm } from "../components/forms/LoginForm";




export default function Login() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white w-full max-w-4xl h-auto sm:h-[40rem] shadow-2xl rounded-3xl flex flex-col sm:flex-row items-center sm:items-stretch justify-center">
                <div className="w-full sm:w-1/2 bg-black rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none">
                    <Image
                        aria-hidden
                        src="/images/login.png"
                        alt="Saúde Rápida"
                        width={700}
                        height={700}
                        className="w-full h-48 sm:h-full object-cover rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
                    />
                </div>
                <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Login</h1>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}
