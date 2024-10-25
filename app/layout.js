import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "Portafolio / Lucas-Palma",
  description: "Portafolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${raleway.className} bg-slate-800 overflow-x-hidden text-shadow`}>
        {children}
      </body>
    </html>
  );
}
