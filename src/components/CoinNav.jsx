import React from 'react'
import logo from"../img/coincap.png"
import {Link} from "react-router-dom"
import CoinSearch from './CoinSearch'

const CoinNav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        
        <div className='container justify-content-between'>
            <div>
                <Link to="/">
                <img src={logo} alt="logo Coincap" className='img-logo' />
                </Link>
            </div>

            <CoinSearch/>

            <ul className='navbar-nav mb-2 mb-lg-0'>
                <Link className='nav-link active' to="/login">
                    Cerrar sesión
                </Link>
            </ul>
        </div>

    </nav>

  )
}

export default CoinNav