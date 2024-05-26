import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste front-end busca estados.",
  description: "Receber os dados retornados do back-end e mostrar em um dropdown desencriptografando ele.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
