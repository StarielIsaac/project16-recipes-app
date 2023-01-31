import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDefaulCategoriesMeals,
  fetchDefaultCategoriesDrinks } from '../services/ApiCategories';
import { fetchByCategoryDrinks,
  fetchByCategoryMeals } from '../services/ApiFilterbyCategories';
import {
  fetchDefaultMeals, fetchDefaultDrinks,
} from '../services/ApiMealsOrDrinksDefaul';

function Recipes({ history }) {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const [renderRecipes, setRenderRecipes] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoresFilter, setCategoriesFilter] = useState([]);
  const [ExistFilter, setExisfilter] = useState('');

  const maxRecipes = 12;
  const maxCategories = 5;

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

  const filterCategoriesDefault = () => {
    let fiveCategories;
    if (categories
       && categories.meals && categories.meals.length > 0 && categories.meals) {
      fiveCategories = categories.meals
        .filter((_, index) => index < maxCategories);
    }
    if (categories
      && categories.drinks && categories.drinks.length > 0 && categories.drinks) {
      fiveCategories = categories.drinks
        .filter((_, index) => index < maxCategories);
    }
    setCategoriesFilter(fiveCategories);
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

  const fetchDefaulCategories = async () => {
    let categoriesDefault;
    if (history.location.pathname === '/meals') {
      categoriesDefault = await fetchDefaulCategoriesMeals();
    }
    if (history.location.pathname === '/drinks') {
      categoriesDefault = await fetchDefaultCategoriesDrinks();
    }
    setCategories(categoriesDefault);
  };

  const fetchByCategory = async ({ target }) => {
    console.log('exis', ExistFilter, 'targt', target.value);
    if (ExistFilter === target.value) {
      setExisfilter('');
      return setRecipes(null);
    }
    let byCategories;
    if (history.location.pathname === '/meals') {
      byCategories = await fetchByCategoryMeals(target.value);
    }
    if (history.location.pathname === '/drinks') {
      byCategories = await fetchByCategoryDrinks(target.value);
    }
    setRecipes(byCategories);
    setExisfilter(target.value);
  };

  const clickAllFilter = () => {
    setRecipes(null);
  };

  useEffect(() => {
    if (recipes === null) {
      checkDefaultFetch();
    }
    filterRecipesOrDefaultRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);

  useEffect(() => {
    checkDefaultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchDefaulCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterCategoriesDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <div>
      <nav>
        {categoresFilter && categoresFilter.map((category, index) => (
          <button
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            value={ category.strCategory }
            onClick={ fetchByCategory }
          >
            {category.strCategory}
          </button>
        ))}
      </nav>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ clickAllFilter }
      >
        ALL

      </button>
      <div>
        {renderRecipes && renderRecipes.map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <p data-testid={ `${index}-card-name` }>
              {recipe.strMeal || recipe.strDrink}
            </p>
            <img
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt={ recipe.strMealThumb || recipe.strDrinkThumb }
              data-testid={ `${index}-card-img` }
            />
          </div>
        ))}
      </div>
    </div>

  );
}

Recipes.propTypes = {}.isRequired;

export default withRouter(Recipes);
