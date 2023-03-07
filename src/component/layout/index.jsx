import React from 'react'
import Navbar from '../navbar';
import c from './style.module.scss'

function Layout({children}) {
    return (
        <div className={c.main}>
            <div className={c.left}><Navbar /></div>
            <div className={c.right}>{children}</div>
        </div>
    )
}

export default Layout
