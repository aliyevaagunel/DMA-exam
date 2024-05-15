import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
    <div className='header'>
        <Link className='link' to="/">Anasehife</Link>
        <Link className='link' to="/about">Haqqimizda</Link>
        <Link className='link' to="/products">Mehsullarimiz</Link>
        <Link className='link' to="/contact">Elaqe</Link>

    </div>
    )
}

export default Header
