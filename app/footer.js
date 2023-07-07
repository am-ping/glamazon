"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import '@/components/styles/globals.css'
import { useEffect } from "react";
import Link from 'next/link'

export default function Footer() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">About</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                </ul>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <p className="text-center text-body-secondary">© 2023 Glamazon, Inc</p>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><Link className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></Link></li>
                        <li className="ms-3"><Link className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></Link></li>
                        <li className="ms-3"><Link className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></Link></li>
                    </ul>
                </div>
                
            </footer>
        </div>
    )
}