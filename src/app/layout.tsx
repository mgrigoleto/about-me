import type { Metadata } from "next";
import { Quicksand, Saira, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Saira({
    subsets: ["latin"],
    weight: ["300", "400"],
});

export const metadata: Metadata = {
    title: "Maurício Grigoleto",
    description: "Maurício Grigoleto's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ubuntu.className}`}>
                {children}
            </body>
        </html>
    );
}
