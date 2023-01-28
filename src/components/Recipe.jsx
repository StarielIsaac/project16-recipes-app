import React from 'react';

function Recipes({ recipes }) {
  const limitedRcipesNumber = 12;
  let limitedRecipes = [];
  if (recipes.meals) {
    limitedRecipes = recipes.meals.filter((_, index) => index < limitedRcipesNumber);
  }
  if (recipes.drinks) {
    limitedRecipes = recipes.drinks.filter((_, index) => index < limitedRcipesNumber);
  }

  if (!recipes.drinks && !recipes.meals) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  return (
    limitedRecipes.map((recipe, index) => (
      <div data-testid={ `${index}-recipe-card` } key={ index }>
        <p data-testid={ `${index}-card-name` }>{recipe.strMeal || recipe.strDrink}</p>
        <img
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          alt={ recipe.strMealThumb || recipe.strDrinkThumb }
          data-testid={ `${index}-card-img` }
        />
      </div>
    ))

  );
}

export default Recipes;
