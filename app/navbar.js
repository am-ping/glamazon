"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import '@/components/styles/globals.css'
import { useEffect } from "react";
import Link from 'next/link'

export default function Navbar() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <nav className='navbar rounded navbar-expand-lg m-2'>
            <div className='container-fluid'>
                <Link className='navbar-brand mb-0 h1' href='/'>GLAMAZON</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-md-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/men/shirts">Shirts</Link></li>
                                <li><Link className="dropdown-item" href="/men/tshirts-and-tanks">T-shirts & Tanks</Link></li>
                                <li><Link className="dropdown-item" href="/men/hoodies-and-sweatshirts">Hoodies & Sweatshirts</Link></li>
                                <li><Link className="dropdown-item" href="/men/suits-and-blazers">Suits & Blazers</Link></li>
                                <li><Link className="dropdown-item" href="/men/coats-and-jackets">Coats & Jackets</Link></li>
                                <li><Link className="dropdown-item" href="/men/cardigans-and-sweaters">Cardigans & Sweaters</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/men/jeans">Jeans</Link></li>
                                <li><Link className="dropdown-item" href="/men/pants">Pants</Link></li>
                                <li><Link className="dropdown-item" href="/men/sweatpants">Sweatpants</Link></li>
                                <li><Link className="dropdown-item" href="/men/shorts">Shorts</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/men/swimwear">Swimwear</Link></li>
                                <li><Link className="dropdown-item" href="/men/sportswear">Sportswear</Link></li>
                                <li><Link className="dropdown-item" href="/men/sleepwear-and-loungewear">Sleepwear & Loungewear</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/men/hats">Hats</Link></li>
                                <li><Link className="dropdown-item" href="/men/ties-and-bow-ties">Ties & Bow ties</Link></li>
                                <li><Link className="dropdown-item" href="/men/scarves">Scarves</Link></li>
                                <li><Link className="dropdown-item" href="/men/belts">Belts</Link></li>
                                <li><Link className="dropdown-item" href="/men/socks">Socks</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/women/dresses">Dresses</Link></li>
                                <li><Link className="dropdown-item" href="/women/tops">Tops</Link></li>
                                <li><Link className="dropdown-item" href="/women/shirts-and-blouses">Shirts & Blouses</Link></li>
                                <li><Link className="dropdown-item" href="/women/overalls-and-jumpsuits">Overalls & Jumpsuits</Link></li>
                                <li><Link className="dropdown-item" href="/women/blazers">Blazers</Link></li>
                                <li><Link className="dropdown-item" href="/women/coats-and-jackets">Coats & Jackets</Link></li>
                                <li><Link className="dropdown-item" href="/women/cardigans-and-sweaters">Cardigans & Sweaters</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/women/jeans">Jeans</Link></li>
                                <li><Link className="dropdown-item" href="/women/pants">Pants</Link></li>
                                <li><Link className="dropdown-item" href="/women/sweatpants">Sweatpants</Link></li>
                                <li><Link className="dropdown-item" href="/women/shorts">Shorts</Link></li>
                                <li><Link className="dropdown-item" href="/women/skirts">Skirts</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/women/swimwear">Swimwear</Link></li>
                                <li><Link className="dropdown-item" href="/women/sportswear">Sportswear</Link></li>
                                <li><Link className="dropdown-item" href="/women/sleepwear-and-loungewear">Sleepwear & Loungewear</Link></li>
                                <li><Link className="dropdown-item" href="/women/maternity-wear">Maternity Wear</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/women/hats">Hats</Link></li>
                                <li><Link className="dropdown-item" href="/women/purses">purses</Link></li>
                                <li><Link className="dropdown-item" href="/women/scarves">Scarves</Link></li>
                                <li><Link className="dropdown-item" href="/women/socks"></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/rent">Rent-A-Swag <span className="badge bg-warning">NEW!</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sale">Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/career">Job Board</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <div className="d-flex ms-md-auto">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cart
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Shopping Cart</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}