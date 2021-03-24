import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../../styles/base/custom.scss'
import { emptyCocktail } from './utils/calculatorFixtures'
import CocktailForm from './Components/CocktailForm';
import CostCalculator from './Components/CostCalculator'

const CocktailCalculator = () => {

  // Which form is in view?
  const [utility, setUtility] = useState('cocktail-form')

  // Holds all of the information about the current cocktail being built
  const [ drink, setDrink ] = useState({...emptyCocktail})

  // Holds the price of the drink for the cost calculator
    // Abstracted from drink to reduce complexity
  const [ drinkPrice, setDrinkPrice ] = useState(0)

  // These will be used in the cost calculator, there will be one for every ingredient.
  const [ bottles, setBottles ] = useState([])

  // Holds the ID of ingredients that should not be cost.
  const [ dontCost, setDontCost ] = useState([])

  // Holds the string representation of editor data
  const [ editorData, setEditorData ] = useState("<h1>My Cocktails</h1>")
  
  //Is the editor currently being used?
  const [ editorFocus, setEditorFocus ] = useState(false)

  // When the drink ingredients change, the bottles update
  useEffect(() => {
    const newBottles = drink.ingredients.map(({name, id, amount, unit})  => {
      let oldBottle
      if(bottles.length > 0){
        oldBottle = bottles.find(bottle => bottle.id === id)
      }
      return { 
        id, 
        cost: 0,
        size: 0,
        unit,
        ...oldBottle,
        name, 
        amountInCocktail: {amount, unit},
      }
    })
    
    setBottles([...newBottles])
  }, [drink])


  return (
    <main className='section__cocktail-calculator'>
      <div className="column-one">
        <select
          className='utility-select'
          value={utility}
          onChange={(e) => {
            setUtility(e.target.value)
          }}
        >
          <option value="cocktail-form">Cocktail Form</option>
          <option value="cost-calculator">Cost Calculator</option>
        </select>
        
        {/* Switch between cost calculator or cocktail form based on the utility state */}
        { utility === 'cocktail-form' ?
          <CocktailForm
            drink={drink}
            setDrink={setDrink}
            editorData={editorData}
            setEditorData={setEditorData}
          /> :
          <CostCalculator
            drinkName={drink.cocktailName}
            drinkCost={drinkPrice}
            setDrinkCost={setDrinkPrice}
            dontCost={dontCost}
            setDontCost={setDontCost}
            editorData={editorData}
            setEditorData={setEditorData}
            bottles={bottles}
            setBottles={setBottles}
          />
        }
      </div>
      <div className="column-two">
        <CKEditor
            editor={ ClassicEditor }
            data={ editorData }
            onFocus={ () => {
              setEditorFocus(true)
            } }
            onChange={ ( event, editor ) => {
              if(editorFocus){
                const data = editor.getData()
                setEditorData(data)
              }
            } }
            onBlur={() => {
              setEditorFocus(false)
            } }
        />
      </div>
    </main>
  )
}

export default CocktailCalculator