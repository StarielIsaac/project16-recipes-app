import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import {
  fetchDefaultMeals, fetchDefaultDrinks,
} from '../services/ApiMealsOrDrinksDefaul';

function Recipes({ history }) {
  const { recipes } = useContext(RecipesContext);
  const [renderRecipes, setRenderRecipes] = useState(null);

  const maxRecipes = 12;

  const filterRecipesOrDefaultRecipes = (recipesDefault) => {
    if (recipes || recipesDefault) {
      const recipesBase = recipes || recipesDefault;
      if (recipesBase.meals) {
        const limitedRecipes = recipesBase.meals
          .filter((_, index) => index < maxRecipes);
        setRenderRecipes(limitedRecipes);
      }
      if (recipesBase.drinks) {
        const limitedRecipes = recipesBase.drinks
          .filter((_, index) => index < maxRecipes);
        setRenderRecipes(limitedRecipes);
      }

      if (!recipesBase.drinks && !recipesBase.meals) {
        return global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
    }
  };

  const checkDefaultFetch = async () => {
    let recipesDefault;
    if (history.location.pathname === '/meals') {
      recipesDefault = await fetchDefaultMeals();
    }
    if (history.location.pathname === '/drinks') {
      recipesDefault = await fetchDefaultDrinks();
    }
    filterRecipesOrDefaultRecipes(recipesDefault);
  };

  useEffect(() => {
    filterRecipesOrDefaultRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);

  useEffect(() => {
    checkDefaultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    renderRecipes && renderRecipes.map((recipe, index) => (
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

export default withRouter(Recipes);
