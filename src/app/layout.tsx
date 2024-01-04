import type {Metadata} from 'next'
import './globals.css'
import Navbar from '../components/Navbar/index';
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: 'Ramzi Osta',
    description: 'Technical Project Manager',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="">

        <Navbar />
            {children}
        <Footer />
        </body>
        </html>
    )
}
