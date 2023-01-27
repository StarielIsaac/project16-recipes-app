import { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderContext from '../context/hearderContext';
import { fetchIngredientsMeals,
  fetchNameMeals,
  fetchFirstLetterMeals } from '../services/ApiMeals';

import {
  fetchIngredientsDrinks,
  fetchNameDrinks,
  fetchFirstLetterDrinks } from '../services/ApiDrinks';
import Recipes from './Recipe';

function SearchBar({ history }) {
  const [searchRadioButton, setsearchRadioButton] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { valueInputSearch } = useContext(HeaderContext);

  const searchFetchMeals = () => {
    switch (searchRadioButton) {
    case 'ingredientes':
      return fetchIngredientsMeals(valueInputSearch);

    case 'nome':
      return fetchNameMeals(valueInputSearch);

    case 'primeiraLetra':
      return fetchFirstLetterMeals(valueInputSearch);

    default:
      break;
    }
  };

  const searchFetchDrinks = () => {
    switch (searchRadioButton) {
    case 'ingredientes':
      return fetchIngredientsDrinks(valueInputSearch);

    case 'nome':
      return fetchNameDrinks(valueInputSearch);

    case 'primeiraLetra':
      return fetchFirstLetterDrinks(valueInputSearch);

    default:
      break;
    }
  };

  const validadRoute = (data, pathname) => {
    if (data && data.meals && data.meals.length === 1 && pathname === '/meals') {
      history.push(`/meals/${data.meals[0].idMeal}`);
    }

    if (data && data.drinks && data.drinks.length === 1 && pathname === '/drinks') {
      history.push(`/drinks/${data.drinks[0].idDrink}`);
    }
    setRecipes(data.meals);
  };

  const isValidSearchInput = async () => {
    const { location: { pathname } } = history;
    if (searchRadioButton === 'primeiraLetra' && valueInputSearch.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (pathname === '/meals') {
      const data = await searchFetchMeals();
      return validadRoute(data, pathname);
    }
    if (pathname === '/drinks') {
      const data = await searchFetchDrinks();
      return validadRoute(data, pathname);
    }
  };

  return (
    <>
      <label htmlFor="ingredientes">
        Ingredient:
        <input
          name="search"
          id="ingredientes"
          data-testid="ingredient-search-radio"
          type="radio"
          onChange={ ({ target }) => setsearchRadioButton(target.id) }
        />
      </label>

      <label htmlFor="nome">
        Name:
        <input
          name="search"
          id="nome"
          data-testid="name-search-radio"
          type="radio"
          onChange={ ({ target }) => setsearchRadioButton(target.id) }
        />
      </label>

      <label htmlFor="primeiraLetra">
        First letter:
        <input
          name="search"
          id="primeiraLetra"
          data-testid="first-letter-search-radio"
          type="radio"
          onChange={ ({ target }) => setsearchRadioButton(target.id) }
        />
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ isValidSearchInput }
      >
        Buscar

      </button>
      {recipes.length > 1 && recipes.map((recipe) => <Recipes key={ recipe.idMeal } />)}
    </>
  );
}

SearchBar.propTypes = {}.isRequired;

export default withRouter(SearchBar);
