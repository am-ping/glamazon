// "use client"

// import "bootstrap/dist/css/bootstrap.min.css";
import '@/components/styles/globals.css'
// import { useEffect } from "react";

import Navbar from './navbar'
import Footer from './footer'

export const metadata = {
    title: "Glamazon",
    description: "E-Commerce Website",
}

export default function RootLayout({ children }) {
    // useEffect(() => {
    //     require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }, []);

    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="mx-4">{children}</main>
                <Footer />
            </body>
        </html>
    );
}