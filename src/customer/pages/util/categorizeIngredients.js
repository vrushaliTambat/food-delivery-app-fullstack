export const categorizeIngredients = (ingredients) => {
    //reduce method transforms ingredients array into an object
    return ingredients.reduce((acc, ingredient) => {
    //inside ingredient we have category field array which we are destructuring here
      const { category } = ingredient;
      //Checks if the acc object contains a key as current ingredient's category name. 
      //If not, it initializes an empty array for that category.
      if (!acc[category.name]) {
        acc[category.name] = [];
      }
      //else ushes the current ingredient object into the category.name array
      acc[category.name].push(ingredient);
      return acc;
    }, {});
  };
  //acc is the accumulator. It accumulates the results of the operations performed on 
  //each ingredient in the ingredients array. Its initial value is an empty object {}, 
  //which will accumulate the results of grouping ingredients by category name.