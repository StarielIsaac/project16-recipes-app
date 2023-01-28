import { fetchIngredientsMeals,
  fetchNameMeals,
  fetchFirstLetterMeals } from '../services/ApiMeals';

import {
  fetchIngredientsDrinks,
  fetchNameDrinks,
  fetchFirstLetterDrinks } from '../services/ApiDrinks';

export const searchFetchMeals = (searchRadioButton, valueInputSearch) => {
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

export const searchFetchDrinks = (searchRadioButton, valueInputSearch) => {
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
