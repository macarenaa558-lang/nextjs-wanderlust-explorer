import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppState from "@/components/AppState";

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Explorador de experiencias de viaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <AppState>
          <Navbar />
          {children}
        </AppState>
      </body>
    </html>
  );
}