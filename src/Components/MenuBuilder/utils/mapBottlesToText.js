import React from 'react'
import reconcileUnitAmounts from './reconcileUnitAmounts'

const mapBottlesToText = (bottles, filterArray, drinkCost, drinkName) => {

  let totalCost = 0
  let totalPercent = 0

  // Array to be populated with jsx elements
  const costArray = []

  bottles.forEach(bottle => {
    if(filterArray.includes(bottle.id)){
      return
    } else if (!bottle.cost || !bottle.size){
      const error = <p key={`error#${bottle.id}`}>{`Please supply a bottle cost for ${bottle.name}`}</p>
      costArray.push(error)
    } else if(bottle.amountInCocktail.unit === bottle.unit) {

      // Cost in USD of ingredient
      let unparsedCost = (bottle.amountInCocktail.amount / bottle.size) * bottle.cost
      const cost = Number.parseFloat(unparsedCost).toFixed(2)
      totalCost += unparsedCost

      // Percent of cocktail cost of ingredient
      let unparsedPercent = (cost / drinkCost) * 100
      const percent = Number.parseFloat(unparsedPercent).toFixed(2)
      totalPercent += unparsedPercent

      // Map info to react child
      const costPerPour = (
        <p 
          key={`bottleCost#${bottle.id}`}
        >
          {`${bottle.name}: $${cost} %${percent}`}
        </p>
      )

     // Push to array
     costArray.push(costPerPour)
    } else {
      // Convert ingredient to the same unit as bottle
      const newAmount = reconcileUnitAmounts(bottle.unit, bottle.amountInCocktail.unit, bottle.amountInCocktail.amount)

      // Cost in USD of ingredient
      const unparsedCost = (newAmount / bottle.size) * bottle.cost
      const cost = Number.parseFloat(unparsedCost).toFixed(2)
      totalCost += unparsedCost

      // Percent of cocktail cost of ingredient
      const unparsedPercent = (cost / drinkCost) * 100
      const percent = Number.parseFloat(unparsedPercent).toFixed(2)
      totalPercent += unparsedPercent

      // Map info to react child
      const costPerPour = (
        <p 
          key={`bottleCost#${bottle.id}`}
        >
          {`${bottle.name}: $${cost} %${percent}`}
        </p>
      )

      // Push to array
      costArray.push(costPerPour)
    }
  })

  //Header for element
  const header = (
    <h3 key={`header#${drinkName}`}>
      {drinkName}
    </h3>
  )

  //Parse total cost for printing
  totalCost = Number.parseFloat(totalCost).toFixed(2)
  totalPercent = Number.parseFloat(totalPercent).toFixed(2)

  const subHeader = drinkCost !== 0 ?
      (<p key={`totals#${drinkName}`}>
        <strong>Total cost:</strong> ${totalCost} <strong>Total percent:</strong> %{totalPercent}
      </p>) :
      (<p key={`nototals${drinkName}`}> Please supply a cost for {drinkName}</p>)

  
  costArray.push(subHeader)
  costArray.push(header)

  // Return array to print
  return costArray
}

export default mapBottlesToText