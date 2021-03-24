import React from 'react'

const Bottle = (props) => {
  return (
    <div
      key={`cocktail-form#${props.ingredient.id}`} 
      className="ingredient--cost"
    >
      <p
        key={`ingredient#${props.ingredient.id}`}
      >
        {`${props.ingredient.name}:`}
      </p>

      <form
        key={`ingredient-form#${props.ingredient.id}`} 
        action=""
      >
        <label
          className='bottle-size'
        >
          Bottle Size:
          <input
            disabled={props.dontCost.includes(props.ingredient.id)}
            value={props.ingredient.size}
            onChange={e => {
              const newSize = e.target.value
              const ingredients = props.bottles.map(oldIngredient => {
                if(oldIngredient.id === props.ingredient.id){
                  return {...oldIngredient, size: newSize}
                } else {
                  return oldIngredient
                }
              })
              props.setBottles([...ingredients])
            }}
            type="number"
          />
        </label>
        <label
          className='bottle-unit'
        >
          Unit:
          <select 
            className='bottle-unit__select'
            disabled={props.dontCost.includes(props.ingredient.id)}
            value={props.ingredient.unit}
            onChange={e => {
              const newUnit = e.target.value
              const ingredients = props.bottles.map(oldIngredient => {
                if(oldIngredient.id === props.ingredient.id){
                  return {...oldIngredient, unit: newUnit}
                } else {
                  return oldIngredient
                }
              })
              props.setBottles([...ingredients])
            }}
          >
            <option value="oz">oz</option>
            <option value="L">L</option>
            <option value="mL">mL</option>
          </select>
        </label>
        <label
          className='bottle-cost'
        >
          Bottle Cost(USD):
          <input
            disabled={props.dontCost.includes(props.ingredient.id)} 
            type='number' 
            value={props.ingredient.cost}
            onChange={e => {
              const newCost = e.target.value
              const ingredients = props.bottles.map(oldIngredient => {
                if(oldIngredient.id === props.ingredient.id){
                  return {...oldIngredient, cost: newCost}
                } else {
                  return oldIngredient
                }
              })
              props.setBottles([...ingredients])
            }}
          />
        </label>
        <input 
          type="checkbox"
          className='should-cost'
          checked={!props.dontCost.includes(props.ingredient.id)}
          onChange={(e) => {
            if(props.dontCost.includes(props.ingredient.id)){
              const newFilters = props.dontCost.filter(id => {
                return id !== props.ingredient.id
              })
              props.setDontCost(newFilters)
            } else {
              const newFilter = props.dontCost
              newFilter.push(props.ingredient.id)
              props.setDontCost([...newFilter])
            }
          }}
        />
      </form>
    </div>
  )
}

export default Bottle