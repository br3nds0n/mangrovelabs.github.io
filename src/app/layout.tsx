import "../styles/globals.css";
import "../index.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Criar Landing Page",
  description: "Landing page migrada para Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}


