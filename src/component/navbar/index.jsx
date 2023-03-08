import React from 'react'
import { Link } from 'react-router-dom';
import c from "./style.module.scss";

function Navbar() {
    return (
        <div className={c.Navbar}>
            <div><Link className={c.logo}>Sovgalar</Link></div>
            <div>
            <Link to={'/product'}>Product</Link>
            </div>
            <div>
            <Link to={'/category'}>Category</Link>
            </div>
            <div>
            <Link to={'/information'}>Information</Link>
            </div>
            <div>
            <Link to={'/massage'}>Massage</Link>
            </div>
        </div>
        
    )
}

export default Navbar
