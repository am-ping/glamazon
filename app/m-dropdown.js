"use client"

import Link from 'next/link'

export default function MenDropdown() {

    function dropdown() {
        let menMenu = document.getElementById("men-dropdown")
        menMenu.classList.toggle('hidden')
    }

    return (
        <>
            <li className="nav-item dropdown" onClick={dropdown}>Men<strong>+</strong>
                <ul className="dropdown-menu hidden" id="men-dropdown">
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
        </>
    )
}