"use client"

import Link from 'next/link'

export default function MenDropdown() {

    function dropdown() {
        let menMenu = document.getElementById("men-dropdown")
        let womenMenu = document.getElementById("women-dropdown")
        menMenu.classList.toggle('hidden')
        if (womenMenu.classList.contains !== 'hidden') {
            womenMenu.classList.add('hidden')
        }
    }

    return (
        <>
            <li className="nav-item dropdown" onClick={dropdown}>Men<strong>+</strong>
                <ul className="dropdown-menu hidden" id="men-dropdown">
                    <li><Link className="dropdown-item" href="/men/shirts">Shirts</Link></li>
                    <li><Link className="dropdown-item disabled" href="">T-shirts & Tanks</Link></li>
                    <li><Link className="dropdown-item" href="/men/hoodies-and-sweatshirts">Hoodies & Sweatshirts</Link></li>
                    <li><Link className="dropdown-item disabled" href="">Coats & Jackets</Link></li>
                    <li><hr /></li>
                    <li><Link className="dropdown-item disabled" href="">Pants</Link></li>
                    <li><Link className="dropdown-item" href="/men/sweatpants">Sweatpants</Link></li>
                    <li><hr /></li>
                    <li><Link className="dropdown-item" href="/men/hats">Hats</Link></li>
                    <li><Link className="dropdown-item disabled" href="">Scarves</Link></li>
                    <li><Link className="dropdown-item disabled" href="">Socks</Link></li>
                </ul>
            </li>
        </>
    )
}