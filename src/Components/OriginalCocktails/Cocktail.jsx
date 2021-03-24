import React from 'react'

const Cocktail = (props) => (
  <div className='section__original-cocktails--cocktail'>
    <h1 className='name'>{props.cocktail.name}</h1>
    <div className="photo-box">
      <img className='photo' src={`/${props.cocktail.imageLink}`} alt={props.cocktail.name}/>
      <p>{props.cocktail.imageSource ? `Photo by ${props.cocktail.imageSource}` : ''}</p>
    </div>
    <ul className='recipe'>
      {props.cocktail.ingredients.map((ingredient, index) => (
        <li key={index}>
          {`${ingredient.amount.toString().replace(/^0+/, '')}${ingredient.unitOfMeasurment} ${ingredient.name}`}
        </li>
      ))}
      <p><strong>Glass:</strong> {props.cocktail.glass}</p>
      <p><strong>Garnish:</strong> {props.cocktail.garnish}</p>
      <p><strong>Method:</strong> {props.cocktail.drinkMethod}</p>
    </ul>
    <p className='description'>{props.cocktail.description} here is some more text .</p>
  </div>
)

export default Cocktail
