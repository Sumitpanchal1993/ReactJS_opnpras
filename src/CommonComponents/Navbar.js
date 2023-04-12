import React from 'react'
import '../CommonComponents/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className='logo'>
                    <Link to={'/'}>ONPRAS</Link>
                </div>
                <div className="navmenu">
                    <ul className='navul'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/product'}>Products</Link></li>
                        <li><Link to={'/ourcustomer'}>Our Customers</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/aboutus'}>About Us</Link></li>
                    </ul>
                </div>

            </nav>

        </>
    )
}
