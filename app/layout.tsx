import type { Metadata, Viewport } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TLM Advocacia | Advogado em São Paulo",
  description:
    "Assessoria jurídica em São Paulo. Atuação em Direito do Consumidor, Trabalhista e Imobiliário. Fale com um advogado e entenda como agir no seu caso.",
  keywords: [
    "advogado em São Paulo",
    "advogado Mooca",
    "assessoria jurídica",
    "direito do consumidor",
    "direito trabalhista",
    "direito imobiliário",
    "advogado online",
    "orientação jurídica",
    "advogado SP",
    "consultar advogado",
  ],

  authors: [{ name: "Thiago Lopes Martinez" }],
  creator: "TLM Advocacia",
  publisher: "TLM Advocacia",

  metadataBase: new URL("https://www.tlmadvocacia.com.br"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Advogado em São Paulo | TLM Advocacia",
    description:
      "Fale com um advogado e receba orientação jurídica clara e segura. Atendimento em todo o Brasil.",
    url: "https://www.tlmadvocacia.com.br",
    siteName: "TLM Advocacia",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advogado em São Paulo | TLM Advocacia",
    description:
      "Assessoria jurídica com atendimento direto. Entenda seus direitos e saiba como agir.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "legal services",
};

export const viewport: Viewport = {
  themeColor: "#f110c1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-roboto">{children}</body>
    </html>
  );
}
