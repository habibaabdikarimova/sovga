import React from 'react'
import { Link } from 'react-router-dom';
import c from "./style.module.scss";

function Navbar() {
    return (
        <div className={c.Navbar}>
            <div><Link className={c.logo}>Sovgalar</Link></div>
            <div>
            <Link className={c.linkNavbar} to={'/user'}>User</Link>
            </div>
            <div>
            <Link className={c.linkNavbar} to={'/product'}>Product</Link>
            </div>
            <div>
            <Link className={c.linkNavbar} to={'/category'}>Category</Link>
            </div>
            <div>
            <Link className={c.linkNavbar} to={'/information'}>Information</Link>
            </div>
            <div>
            <Link className={c.linkNavbar} to={'/massage'}>Massage</Link>
            </div>
        </div>
        
    )
}

export default Navbar
