const originalCocktails = [
  {
    name: 'Appleseed Lane',
    description: 'A play on the Suffering Bastard. This fall forward drink combines cognac, a brandy based gin, apple shrub, and fall flavors for a bright citrusy cocktail with a smooth mouthfeel.',
    ingredients: [
      {
        name: 'Pierre Ferrand 1840 Cognac',
        amount: 1,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Copper & Kings Gin',
        amount: .5,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Allspice',
        amount: .25,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Apple Shrub',
        amount: .75,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Lemon Juice',
        amount: .5,
        unitOfMeasurment: 'oz', 
      }
    ],
    glass: 'Rocks',
    garnish: 'Apple Slices',
    drinkMethod: 'Shaken, Angostura Bitters Float, Garnish',
    imageLink: './images/appleseed.jpg'
  },{
    name: 'Scarborough Sour',
    description: 'This play on the New York Sour combines rye whiskey with a savory syrup made of sage, rosemary, and thyme. It then adds a little brightness with some citrus and a little bit of spice with a bold red wine float. This drink will warm you right up in the winter, and goes down easy too.',
    ingredients: [
      {
        name: 'Jim Beam Rye Whiskey',
        amount: 1.5,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Lemon Juice',
        amount: 1,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Scarborough Syrup',
        amount: .75,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Malbec',
        amount: 1,
        unitOfMeasurment: 'oz', 
      }
    ],
    glass: 'Rocks',
    garnish: 'Sage Leaf',
    drinkMethod: 'Shaken, Red Wine Float, Garnish.',
    imageLink: './images/scarborough.jpg',
    imageSource: 'Peter Holmgren'
  },{
    name: 'The Notorious RBG',
    description: 'This Margarita variation uses an aged reposado tequila, with a 2:1 agave syrup, and lime juice to make an earthy, slightly sweeter drink. It\'s topped with red wine because it looks nice.',
    ingredients: [
      {
        name: 'Lunazul Reposado Tequila',
        amount: 1.5,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Lime Juice',
        amount: .75,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Agave Syrup',
        amount: .75,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Pierre Ferrand Dry Curacao',
        amount: .5,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Malbec',
        amount: 1,
        unitOfMeasurment: 'oz', 
      }
    ],
    glass: 'Rocks',
    garnish: 'Red wine fload/Lime wedge',
    drinkMethod: 'Shaken',
    imageLink: './images/notorious.jpg',
    imageSource: ''
  },{
    name: 'Sally\'s Arm',
    description: 'This drink gives plain ol vodka a nice fall makeover. We blend pumpkin puree with water and sugar to make a pumpkin syup, add in some licor 43 and allspice for some fall flavors, throw a cinnamon sugar rim on there, and mmmm mmm mmmmmm.',
    ingredients: [
      {
        name: 'Vodka',
        amount: 1.5,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Pumpkin Syrup',
        amount: .75,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Lime Juice',
        amount: .75,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Licor 43',
        amount: .25,
        unitOfMeasurment: 'oz', 
      },
      {
        name: 'Allspice',
        amount: .25,
        unitOfMeasurment: 'oz', 
      }
    ],
    glass: 'Rocks',
    garnish: 'Cinnamon sugar rim',
    drinkMethod: 'Shaken, Garnish, Serve',
    imageLink: './images/sally.png',
    imageSource: 'Peter Holmgren'
  }

]

export default originalCocktails


// An Empty cocktail object
// {
//   name: '',
//   description: '',
//   ingredients: [
//     {
//       name: '',
//       amount: 0,
//       unitOfMeasurment: 'oz', 
//     },
//     {
//       name: '',
//       amount: 0,
//       unitOfMeasurment: 'oz', 
//     },
//     {
//       name: '',
//       amount: 0,
//       unitOfMeasurment: 'oz', 
//     }
//   ],
//   glass: '',
//   garnish: '',
//   method: '',
//   imageLink: '',
//   imageSource: ''
// }