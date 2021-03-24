export const mapDrinkToText = (drink, useGarnish, useGlass, useMethod) => {
  let drinkText = ''
  //Set Drink Name as h3
  drinkText += `<h3>${drink.cocktailName}</h3>`

  //Start unordered list for ingredients
  drinkText += '<ul>'
  //Insert ingredients
  drink.ingredients.forEach(ingredient => {
    drinkText += `<li>${ingredient.name} ${ingredient.amount} ${ingredient.unit}</li>`
  })
  //Close list
  drinkText +='</ul>'

  if(useGarnish){
    drinkText +=`<strong>Garnish: </strong>${drink.garnish}<br/>`
  }

  if(useGlass){
    drinkText +=`<strong>Glass: </strong>${drink.glass}<br/>`
  }

  if(useMethod){
    drinkText +=`<strong>Method: </strong>`
    switch(drink.method){
      case 'shaken':
        drinkText += 'Add ingredients to small tin, add ice, shake, double strain.'
        break;
      case 'stirred':
        drinkText += 'Add ingredients to mixing glass, add ice, stir, strain.'
        break;
      case 'dry-shake':
        drinkText += 'Take the drink off your menu'
        break;
    }
  }

  return drinkText
}