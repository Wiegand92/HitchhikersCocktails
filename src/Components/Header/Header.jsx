import React from 'react'
import { NavLink } from 'react-router-dom'

const activatedStyle = {
  fontWeight: 'bold',
  color: 'orange'
}

const Header = () => (
  <header>
    <div className='hero-image'>
      <h1 className="title">Hitchiker's Guide to Cocktails</h1>
    </div>

    <nav className='navbar'>
      <NavLink 
        className='link'
        exact to='/' 
        activeStyle={activatedStyle}
      >
        Original Cocktails
      </NavLink>

      <NavLink
        className='link'
        to='/cocktail-resource'
        activeStyle={activatedStyle}
      >
        Cocktail Resource
      </NavLink>

      <NavLink
        className='link'
        to='/menu-builder'
        activeStyle={activatedStyle}
      >
        Menu Builder
      </NavLink>
    </nav>
  </header>
)

export default Header