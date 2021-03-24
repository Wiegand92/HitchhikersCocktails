import React from 'react'
import { NavLink } from 'react-router-dom'

import cocktails from '../../utils/originalCocktails'
import Cocktail from './Cocktail'

const activatedStyle = {
  fontWeight: 'bold',
  color: 'orange'
}

const OriginalCocktails = (props) => (
  <main className='section__original-cocktails'>
    <div className="drink-links">
      {cocktails.map(cocktail => (
        <NavLink 
          activeStyle={activatedStyle}
          className='drink-link' 
          key={cocktail.name} 
          to={`/cocktails/${cocktail.name}`}
        >
          {cocktail.name}
        </NavLink>
      ))}
    </div>
    <Cocktail 
      cocktail={
        cocktails.find(cocktail => cocktail.name === props.match.params.id) !== undefined 
        ? cocktails.find(cocktail => cocktail.name === props.match.params.id) : cocktails[0] 
      } />
  </main>
)

export default OriginalCocktails