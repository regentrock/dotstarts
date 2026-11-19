import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DotStarts | Sites e landing pages para pequenos negócios",
    template: "%s | DotStarts",
  },
  description:
    "A DotStarts cria sites institucionais e landing pages rápidos e profissionais para lojas, comércios e prestadores de serviço aparecerem mais e receberem mais contatos.",
  icons: {
    icon: "/DotStarts-2.png",
    shortcut: "/DotStarts-2.png",
    apple: "/DotStarts-2.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}