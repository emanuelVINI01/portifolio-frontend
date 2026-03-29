import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Emanuel // System Architect",
  description:
    "Full-stack engineer & systems designer. Started at age 11 building Minecraft plugins. Now ships complex engines fast — betting platforms, developer tools, and more.",
  openGraph: {
    title: "Emanuel // System Architect",
    description: "Full-stack engineer & systems designer portifolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${firaCode.variable} h-full`}>
      <body className={`${jetbrains.className} min-h-full`}>{children}</body>
    </html>
  );
}
