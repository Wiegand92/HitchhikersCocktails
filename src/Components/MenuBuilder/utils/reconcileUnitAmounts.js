const reconcileUnitAmounts = (bottleUnit, ingredientUnit, ingredientAmount) => {
  switch (bottleUnit) {
    case 'oz':
      switch(ingredientUnit) {
        case 'oz':
          return ingredientAmount;
        case 'cL':
          return ingredientAmount * 2.957;
        case 'mL':
          return ingredientAmount * 29.574;
        case 'brspn':
          return ingredientAmount * 0.035;
        case 'dash':
          return ingredientAmount * 0.021;
      };
    case 'L':
      switch(ingredientUnit) {
        case 'oz':
          return ingredientAmount / 33.814;
        case 'cL':
          return ingredientAmount / 100;
        case 'mL':
          return ingredientAmount / 1000;
        case 'brspn':
          return ingredientAmount * 0.0025;
        case 'dash':
          return ingredientAmount * 0.00092;
      };
    case 'mL':
      switch(ingredientUnit) {
        case 'oz':
          return ingredientAmount * 29.574;
        case 'cL':
          return ingredientAmount * 10;
        case 'mL':
          return ingredientAmount;
        case 'brspn':
          return ingredientAmount * 5;
        case 'dash':
          return ingredientAmount * 0.92;
      };
  }
}

export default reconcileUnitAmounts