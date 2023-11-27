import "./globals.css";
import { Gluten } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const FontGluten = Gluten({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio / Lucas-Palma",
  description: "Portafolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${FontGluten.className} bg-slate-800 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
