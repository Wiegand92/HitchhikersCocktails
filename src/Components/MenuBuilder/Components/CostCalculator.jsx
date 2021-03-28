import React, { useState } from 'react'

import mapBottlesToText from '../utils/mapBottlesToText'
import Bottle from './Bottle'

const CostCalculator = (props) => {

  const [drinkCost, setDrinkCost] = useState(props.drinkCost)

  const reorderCostArray = () => {
    
    const JSXArray = mapBottlesToText(props.bottles, props.dontCost, props.drinkCost, props.drinkName)
    //Last element is header, 2nd to last is sub header, spread out rest
    const costArray = [JSXArray.pop(), JSXArray.pop(), ...JSXArray]

    return costArray
  }

  //Converts text from the array of JSX elements to a string for CKEditor
  const mapCostToEditor = (e) => {

    e.preventDefault()

    const newTextArray = mapBottlesToText(props.bottles, props.dontCost, props.drinkCost, props.drinkName)
    const numOfBottles = newTextArray.length - 1
    
    let newText = ''

    newTextArray.forEach((paragraph, i) => {
      // Last child is always header
      if(i === numOfBottles){
        const header = `${`<h3>${props.drinkName}</h3>`}`
        const textWithHeader = header.concat(" ", newText)

        newText = textWithHeader
      // Second to last child is always total amounts, don't include if there is no drink price
      } else if(i === numOfBottles - 1) {
        if(props.drinkCost !== 0){
          const subHeader = `${`
            <p>
              <strong>Total Cost:</strong> ${paragraph.props.children[2]} 
              <strong>Total Percent:</strong> ${paragraph.props.children[6]}
            </p>
          `}`
          const textWithSubHeader = subHeader.concat(' ', newText)

          newText = textWithSubHeader
        }
      } else {
      newText += `${`<p>${paragraph.props.children}</p>`}`
      }
    })

    props.setEditorData(prevState => prevState.concat(newText))

  }

  return (
    <div className="cost-calculator">

      <h2>{props.drinkName}</h2>
      <label
        className='drink-price__label'
        htmlFor='drink-price'
      >
        Drink Price(USD): <input 
          name='drink-price'
          type='number' 
          value={drinkCost}
          min='0'
          onChange={(e) => setDrinkCost(e.target.value)}
          onBlur={() => props.setDrinkCost(drinkCost)}  
        />
      </label>
      {props.bottles.map(ingredient => (
        <Bottle 
          key={`bottle#${ingredient.id}`}
          ingredient={ingredient}
          dontCost={props.dontCost}
          setDontCost={props.setDontCost}
          bottles={props.bottles}
          setBottles={props.setBottles}
        />
      ))}
      <div className='cost-preview'>{reorderCostArray()}</div>

      <button
        className='print-cost'
        onClick={mapCostToEditor}
      >
        Add Cost to Menu
      </button>
    </div>
  )
}

export default CostCalculator