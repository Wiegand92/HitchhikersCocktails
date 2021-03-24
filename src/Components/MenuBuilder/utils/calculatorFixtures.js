import {v4 as uuidv4} from 'uuid'

const emptyCocktail = {
  cocktailName: 'My Drink',
  ingredients:[
    {
      name: 'First Ingredient',
      amount: 0,
      unit: 'oz',
      id: uuidv4()
    },
    {
      name: 'Second Ingredient',
      amount: 0,
      unit: 'oz',
      id: uuidv4()
    },
    {
      name: 'Third Ingredient',
      amount: 0,
      unit: 'oz',
      id: uuidv4()
    }
  ],
  garnish: '',
  glass: '',
  method: 'shaken'
}

const emptyIngredient = {
  name: 'Ingredient',
  amount: 0,
  unit: 'oz',
}

export { emptyCocktail, emptyIngredient }