import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import {mapDrinkToText} from '../utils/mapDrinkToText'
import {emptyIngredient, emptyCocktail} from '../utils/calculatorFixtures'
import Ingredient from './Ingredient'

const CocktailForm = (props) => {

  const [ useGarnish, setUseGarnish ] = useState(true)
  const [ useGlass, setUseGlass ] = useState(true)
  const [ useMethod, setUseMethod ] = useState(true)
  const [ drinkName, setDrinkName ] = useState(props.drink.cocktailName)
  const [ glass, setGlass ] = useState(props.drink.glass)
  const [ garnish, setGarnish ] = useState(props.drink.garnish)

  return (
    <div className="cocktail-form">
      {/* Set the drink name */}
      <input 
        type='text'
        className='drink-name'
        value={drinkName}
        onChange={e => setDrinkName(e.target.value)}
        onBlur={(e) => props.setDrink(prevState => ({ ...prevState, cocktailName: drinkName}))}
      />

      {/* Map each ingredient to separate ingredient component. Pass down drink, & set drink. */}
      {props.drink.ingredients.map(ingredient => (
        <Ingredient 
          key={`ingredient${ingredient.id}`} 
          ingredient={ingredient} 
          drink={props.drink} 
          setDrink={props.setDrink} 
        />
      ))}

      {/* What glass are you using? */}
      <label htmlFor='glass'>Glass: </label>
      <div className="glass-box">
        <input 
          type="text"
          className='drink-glass'
          name='glass' 
          disabled={!useGlass}
          value={glass} 
          list='glasses'
          onChange={e => setGlass(e.target.value)}
          onBlur={e => {props.setDrink(prevState => ({ ...prevState, glass:glass }) )}}
        />
        {/* Do you want to include the glass in your recipe? */}
        <input 
          type="checkbox"
          checked={useGlass}
          onChange={ () => {
            setUseGlass(!useGlass)
          }}
        />
        <datalist id='glasses'>
          <option>Nick and Nora</option>
          <option>Single Old Fashioned</option>
          <option>Double Old Fashioned</option>
          <option>Collins</option>
          <option>Coupe</option>
          <option>Cocktail</option>
        </datalist>
      </div>

      {/* What garnish will you use? */}
      <label htmlFor='garnish'>Garnish: </label>
      <div className="garnish-box">
        <input 
          name='garnish'
          className='drink-garnish'
          disabled={!useGarnish}
          type="text"
          value={garnish}
          onChange={e => setGarnish(e.target.value)}
          onBlur={e => {props.setDrink(prevState => ({...prevState, garnish: garnish}))}}
        />
        {/* Do you want to include the garnish in your recipe? */}
        <input 
          type="checkbox"
          checked={useGarnish}
          onChange={() => {
            setUseGarnish(prevState => !prevState)
          }}
        />
      </div>

      {/* How do you want your drink made? */}
      <label htmlFor='method'>Method: </label>
      <div className='method-box'>
        <select 
          name="method"
          className='drink-method'
          disabled={!useMethod}
          value={props.drink.method}
          onChange={e => {
            props.setDrink(prevState => ({...prevState, method: e.target.value}))
          }} 
        >
          <option value="shaken">Shaken</option>
          <option value="stirred">Stirred</option>
          <option value="dry-shake">Dry Shake</option>
        </select>
        {/* Do you want the method included in the drink? */}
        <input 
          type="checkbox"
          checked={useMethod}
          onChange={ () => {
            setUseMethod(prevState => !prevState)
          }}
        />
      </div>

      {/* Add more ingredients to your drink. */}
      <button
        className='add-ingredient'
        onClick={e => {
          const ingredients = props.drink.ingredients
          ingredients.push({...emptyIngredient, id: uuidv4()})
          props.setDrink(prevState => ({...prevState, ingredients}))
        }}
      >Add Ingredient</button>

      {/* Add your drink to the menu */}
      <button
        className='build-drink'
        onClick={() => {

          // Convert drink object to text for CKEditor
          const drinkText = mapDrinkToText(props.drink, useGarnish, useGlass, useMethod)
          // Add the new drink to the editor
          props.setEditorData(prevState => `${prevState.concat(drinkText)}`)
        }}
      >Build My Drink!</button>

      <button
        className='clear-drink'
        onClick={() => {
          // Reset the drink object. Put this in a separate function?
          props.setDrink({
            ...emptyCocktail, 
            ingredients: [
              {...emptyIngredient, id: uuidv4()}, 
              {...emptyIngredient, id: uuidv4()}, 
              {...emptyIngredient, id: uuidv4()}
            ]
          })
        }}
      >Clear Drink</button>
    </div>
  )
}

export default CocktailForm