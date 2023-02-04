import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../helpers/renderWith';
import HeaderProvider from '../context/HeaderProvider';
import RecipesProvider from '../context/RecipesProvider';
import RecommendationsProvider from '../context/RecommendationsProvider';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import FavProvider from '../context/FavProvider';

// const email = 'trybeteste@hotmail.com';
// const senha = '12345678';

describe('Componente Favorite Recipes', () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue({ meals: [{
      idMeal: '52977',
      strMeal: 'Corba',
    }, {
      idMeal: '53987',
      strMeal: 'arroz' }] }),
  });

  test('Testes Favorites Recipes', async () => {
    renderWithRouter(
      <HeaderProvider>
        <RecipesProvider>
          <RecommendationsProvider>
            <FavProvider>
              <FavoriteRecipes />
            </FavProvider>
          </RecommendationsProvider>
        </RecipesProvider>
      </HeaderProvider>
      ,
    );
    const title = screen.getByRole('heading', {
      name: /favorite recipes/i,
    });

    const iconProfile = screen.getByRole('img', {
      name: /profileicon/i,
    });

    const catMeals = screen.getByRole('button', {
      name: /meals/i,
    });

    const catDrinks = screen.getByRole('button', {
      name: /meals/i,
    });

    const catAll = screen.getByRole('button', {
      name: /meals/i,
    });

    userEvent.click(catMeals);
    userEvent.click(catDrinks);
    userEvent.click(catAll);
  });
});
