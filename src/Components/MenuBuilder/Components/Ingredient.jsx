import React, {useState} from 'react'

const Ingredient = (props) => {

const [name, setName] = useState(props.ingredient.name)
const [unit, setUnit] = useState(props.ingredient.unit)
const [amount, setAmount] = useState(props.ingredient.amount)

return (
  <div
    className='ingredient-form'
    key={props.ingredient.id}
  >
      <input
        type='text'
        className='ingredient-name'
        key={`${props.ingredient.id}${props.ingredient.name}`}
        value={name}
        onChange={ e => {
          setName(e.target.value)
        }}
        onBlur={ () => {
          const ingredients = props.drink.ingredients.map(oldIngredient => {
            if(oldIngredient.id === props.ingredient.id){
              return {...oldIngredient, name}
            } else {
              return oldIngredient
            }
          })

          props.setDrink({...props.drink, ingredients})
        }}
      />
      <input 
        key={`${props.ingredient.amount}${props.ingredient.id}`} 
        className='ingredient-amount'
        type='number' 
        value={amount} 
        min='0'
        onChange={e => {
          setAmount(e.target.value)
        } }
        onBlur={ () => {
          const ingredients = props.drink.ingredients.map(oldIngredient => {
            if(oldIngredient.id === props.ingredient.id){
              return {...oldIngredient, amount}
            } else {
              return oldIngredient
            }
          })

          props.setDrink({...props.drink, ingredients})
        }}
      />
      <select 
        key={`${props.ingredient.unit}${props.ingredient.id}`}
        className='ingredient-unit'
        value={unit}
        onChange={e => {
          setUnit(e.target.value)
        }}
        onBlur={ () => {
          const ingredients = props.drink.ingredients.map(oldIngredient => {
            if(oldIngredient.id === props.ingredient.id){
              return {...oldIngredient, unit}
            } else {
              return oldIngredient
            }
          })

          props.setDrink({...props.drink, ingredients})
        }}
      >
        <option value="oz">oz</option>
        <option value="cL">cL</option>
        <option value="mL">mL</option>
        <option value="brspn">barspoon</option>
        <option value="dash">dash</option>
      </select>
      <button
        key={`delete${props.ingredient.id}`}
        id='delete-ingredient'
        onClick={e => {
          e.preventDefault()

          const ingredients = props.drink.ingredients.filter(oldIngredient => oldIngredient.id !== props.ingredient.id )
          props.setDrink({...props.drink, ingredients})
        }}
      >X</button>
    </div>
  )
}

export default Ingredient