// "use client"

// import "bootstrap/dist/css/bootstrap.min.css";
import '@/components/styles/globals.css'
// import { useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Collapse from './collapse'
import MenDropdown from './m-dropdown'
import WomenDropdown from './w-dropdown'

export default function Navbar() {

    function hide() {
        let menMenu 
    }

    return (
        <>
            <div className="notice">
                Some products are out of stock. Sorry for the inconvenience.
            </div>
            <nav>
                <div className='nav-small'>
                    <p className='cart'>Cart</p>
                    <Link href="/" className='logo m'><h1>Glamazon</h1></Link>
                    <Collapse />
                </div>
                <ul className="nav-tabs" id="myNav">
                    <MenDropdown />
                    <WomenDropdown />
                    <li className='nav-item'><Link href="/rent">Rent</Link></li>
                    <li className='nav-item'><Link href="/sale">Sale</Link></li>
                    <li className='nav-item'><Link href="/about">About</Link></li>
                </ul>
                <Link href="/" className='logo d'><h1>Glamazon</h1></Link>
            </nav>
        </>
    )
}