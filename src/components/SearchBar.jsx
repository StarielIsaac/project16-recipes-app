import { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderContext from '../context/hearderContext';
import Recipes from './Recipe';
import { searchFetchDrinks, searchFetchMeals } from '../helpers/searchFetchSwitch';

function SearchBar({ history }) {
  const [searchRadioButton, setsearchRadioButton] = useState('');
  const [recipes, setRecipes] = useState(null);
  const { valueInputSearch } = useContext(HeaderContext);

  const validadRoute = (data, pathname) => {
    if (data && data.meals && data.meals.length === 1 && pathname === '/meals') {
      history.push(`/meals/${data.meals[0].idMeal}`);
      return setRecipes(data.meals);
    }
    if (data && data.drinks && data.drinks.length === 1 && pathname === '/drinks') {
      history.push(`/drinks/${data.drinks[0].idDrink}`);
      return setRecipes(data.drinks);
    }
    return setRecipes(data);
  };

  const isValidSearchInput = async () => {
    const { location: { pathname } } = history;
    let data;
    if (searchRadioButton === 'primeiraLetra' && valueInputSearch.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (pathname === '/meals') {
      data = await searchFetchMeals(searchRadioButton, valueInputSearch);
    }
    if (pathname === '/drinks') {
      data = await searchFetchDrinks(searchRadioButton, valueInputSearch);
    }
    return validadRoute(data, pathname);
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
      {recipes && <Recipes recipes={ recipes } /> }
    </>
  );
}

SearchBar.propTypes = {}.isRequired;

export default withRouter(SearchBar);
