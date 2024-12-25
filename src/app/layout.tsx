    import type { Metadata } from "next";
    import { Jost } from "next/font/google";
    import "./globals.css";

    const jost = Jost({ 
    subsets: ["latin"] 
    });

    export const metadata: Metadata = {
    title: "naingaunglinn",
    description: "Developer Out Of The Box!",
    };

    export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
    <html lang="en">
        <head>
            <meta name="p:domain_verify" content="2f90e9ef7e9ab50b09de3e0d34812500"/>
        </head>
        <body className={`${jost.className} antialiased`}>
            {children}
        </body>
    </html>
    );
    }
