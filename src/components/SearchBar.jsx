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

function SearchBar({ history }) {
  const [searchRadioButton, setsearchRadioButton] = useState('');
  const { valueInputSearch } = useContext(HeaderContext);

  const searchFetchMeals = () => {
    switch (searchRadioButton) {
    case 'ingredientes':
      fetchIngredientsMeals(valueInputSearch);
      break;
    case 'nome':
      fetchNameMeals(valueInputSearch);
      break;

    case 'primeiraLetra':
      fetchFirstLetterMeals(valueInputSearch);
      break;

    default:
      break;
    }
  };

  const searchFetchDrinks = () => {
    switch (searchRadioButton) {
    case 'ingredientes':
      fetchIngredientsDrinks(valueInputSearch);
      break;
    case 'nome':
      fetchNameDrinks(valueInputSearch);
      break;

    case 'primeiraLetra':
      fetchFirstLetterDrinks(valueInputSearch);
      break;

    default:
      break;
    }
  };

  const isValidSearchInput = () => {
    const { location: { pathname } } = history;
    if (searchRadioButton === 'primeiraLetra' && valueInputSearch.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    return pathname === '/meals' ? searchFetchMeals() : searchFetchDrinks();
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
    </>
  );
}

SearchBar.propTypes = {}.isRequired;

export default withRouter(SearchBar);
