import React from 'react'
import { Link } from 'react-router-dom';
import c from "./style.module.scss";

function Navbar() {
    return (
        <div className={c.Navbar}>
            <Link to={'/user'}>User</Link>
            <Link to={'/product'}>Product</Link>
            <Link to={'/category'}>Category</Link>
            <Link to={'/information'}>Information</Link>
            <Link to={'/massage'}>Massage</Link>
        </div>
        
    )
}

export default Navbar
