import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import 'primeicons/primeicons.css';



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Saúde Rápida",
  description: "Sistema de agendamento de viagens da Secretaria de Saúde de Canindé",
  icons:{
    icon: "/icon.ico",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100"> 
        <PrimeReactProvider>
          <Header/>
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
