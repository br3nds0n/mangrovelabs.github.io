import "../styles/globals.css";
import "../index.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Mangrove Labs",
  description: "Página institucional da Mangrove Labs, fábrica de software especializada em soluções digitais com alto desempenho e inovação.",
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}


