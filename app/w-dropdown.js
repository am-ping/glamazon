"use client"

import Link from 'next/link'

export default function WomenDropdown() {

    function dropdown() {
        let menMenu = document.getElementById("women-dropdown")
        menMenu.classList.toggle('hidden')
    }

    return (
        <>
            <li className="nav-item dropdown" onClick={dropdown}>Women<strong>+</strong>
                <ul className="dropdown-menu hidden" id="women-dropdown">
                    <li><Link className="dropdown-item" href="/women/dresses">Dresses</Link></li>
                    <li><Link className="dropdown-item disabled" href="/women/tops">Tops</Link></li>
                    <li><Link className="dropdown-item" href="/women/shirts-and-blouses">Shirts & Blouses</Link></li>
                    <li><Link className="dropdown-item disabled" href="/women/coats-and-jackets">Coats & Jackets</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="/women/pants">Pants</Link></li>
                    <li><Link className="dropdown-item disabled" href="/women/shorts">Shorts</Link></li>
                    <li><Link className="dropdown-item disabled" href="/women/skirts">Skirts</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item disabled" href="/women/hats">Hats</Link></li>
                    <li><Link className="dropdown-item disabled" href="/women/scarves">Scarves</Link></li>
                    <li><Link className="dropdown-item" href="/women/socks">Socks</Link></li>
                </ul>
            </li>
        </>
    )

}