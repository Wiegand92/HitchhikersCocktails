import React, {useState} from 'react'

const Bottle = (props) => {

  const [bottleSize, setBottleSize] = useState(props.ingredient.size)
  const [bottleCost, setBottleCost] = useState(props.ingredient.cost)

  const handleSizeBlur = () => {
    props.setBottles(prevState => prevState.map(oldIngredient => {
      if(oldIngredient.id === props.ingredient.id){
        return {...oldIngredient, size: bottleSize}
      } else {
        return oldIngredient
      }
    }))
  }

  const handleUnitChange = (e) => {
    const newUnit = e.target.value
    props.setBottles(prevState => prevState.map(oldIngredient => {
      if(oldIngredient.id === props.ingredient.id){
        return {...oldIngredient, unit: newUnit}
      } else {
        return oldIngredient
      }
    }))
  }

  const handleCostBlur = () => {
    props.setBottles(prevState => prevState.map(oldIngredient => {
      if(oldIngredient.id === props.ingredient.id){
        return {...oldIngredient, cost: bottleCost}
      } else {
        return oldIngredient
      }
    }))
  }

  const handleDisableChange = () => {
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
  }

  return (
    <div
      key={`cocktail-form#${props.ingredient.id}`} 
      className="ingredient--cost"
    >
      <p key={`ingredient#${props.ingredient.id}`}>
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
            value={bottleSize}
            min='0'
            onChange={e => { setBottleSize(e.target.value) }}
            onBlur={handleSizeBlur}
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
            onChange={handleUnitChange}
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
            min='0'
            value={bottleCost}
            onChange={e => { setBottleCost(e.target.value) }}
            onBlur={handleCostBlur}
          />
        </label>
        <input 
          type="checkbox"
          className='should-cost'
          checked={!props.dontCost.includes(props.ingredient.id)}
          onChange={handleDisableChange}
        />
      </form>
    </div>
  )
}

export default Bottle