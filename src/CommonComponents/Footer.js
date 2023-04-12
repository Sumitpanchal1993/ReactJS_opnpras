import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <>
            <footer>
                <div className='address'>
                    <h2>Contact Details</h2>
                    <address>
                        28, Vivekanand Colony Moti Bunglaw <br />
                        Dewas Madhya Pradresh India <br />
                        Pin: 455001
                    </address>
                    <label htmlFor="">Phone : </label>
                    <a href='tel:+91 8349102532'>+91 123457896</a> <br />
                    <label htmlFor="">Email : </label>
                    <a href='mailto:onpras@onpras.com'>onpras@onpras.com</a>
                </div>
                <div className='sociallink'>
                <h2>Social Linkages</h2>
                    <p>facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Linkedin</p>
                    <p>Whatsapp</p>
                </div>
                <div className='quicklinks'>
                <h2>Quick Links</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/product'}>Products</Link></li>
                        <li><Link to={'/ourcustomer'}>Our Customers</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/aboutus'}>About Us</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
