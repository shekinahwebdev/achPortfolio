import "./globals.css";
import Navbar from "../components/navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>El Gideon Kanneh - Graphic Designer Portfolio</title>
        <meta
          name="description"
          content="A modern portfolio showcasing creative graphic design work"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
