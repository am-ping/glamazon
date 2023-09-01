// "use client"

// import "bootstrap/dist/css/bootstrap.min.css";
import '@/components/styles/globals.css'
// import { useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Collapse from './collapse'

export default function Navbar() {
    // useEffect(() => {
    //     require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }, []);

    return (
        <>
            <div className="notice">
                Some products are out of stock. Sorry for the inconvenience.
            </div>
            <Link href="/" className='logo'><h1>Glamazon</h1></Link>
            <nav>
                <div className='nav-small'>
                    <p className='cart'>Cart</p>
                    <Collapse />
                </div>
                <ul className="nav-tabs" id="myNav">
                    <li className='nav-item'><Link href="/">Home</Link></li>
                    <li className="nav-item dropdown">Men
                        <ul className="men-dropdown dropdown-menu">
                            <li><Link className="dropdown-item" href="/men/shirts">Shirts</Link></li>
                            <li><Link className="dropdown-item disabled" href="/men/tshirts-and-tanks">T-shirts & Tanks</Link></li>
                            <li><Link className="dropdown-item" href="/men/hoodies-and-sweatshirts">Hoodies & Sweatshirts</Link></li>
                            <li><Link className="dropdown-item disabled" href="/men/coats-and-jackets">Coats & Jackets</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item disabled" href="/men/pants">Pants</Link></li>
                            <li><Link className="dropdown-item" href="/men/sweatpants">Sweatpants</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" href="/men/hats">Hats</Link></li>
                            <li><Link className="dropdown-item disabled" href="/men/scarves">Scarves</Link></li>
                            <li><Link className="dropdown-item disabled" href="/men/socks">Socks</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</Link>
                        {/* <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="/women/dresses">Dresses</Link></li>
                            <li><Link className="dropdown-item disabled" href="/women/tops">Tops</Link></li>
                            <li><Link className="dropdown-item" href="/women/shirts-and-blouses">Shirts & Blouses</Link></li>
                            <li><Link className="dropdown-item disabled" href="/women/coats-and-jackets">Coats & Jackets</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" href="/women/pants">Pants</Link></li>
                            <li><Link className="dropdown-item disabled" href="/women/shorts">Shorts</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item disabled" href="/women/hats">Hats</Link></li>
                            <li><Link className="dropdown-item disabled" href="/women/scarves">Scarves</Link></li>
                            <li><Link className="dropdown-item" href="/women/socks">Socks</Link></li>
                        </ul> */}
                    </li>
                    <li className='nav-item'><Link href="/rent">Rent-A-Swag</Link></li>
                    <li className='nav-item'><Link href="/sale">Sale</Link></li>
                    <li className='nav-item'><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </>
    )
}