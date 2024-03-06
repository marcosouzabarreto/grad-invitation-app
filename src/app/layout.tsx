import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Marco Barreto",
    description: "Formatura de Marco Barreto",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={"bg-background"}>
                <Header />
                {children}
            </body>
        </html>
    );
}
