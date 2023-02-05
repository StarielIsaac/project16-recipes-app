import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../helpers/renderWith';
import HeaderProvider from '../context/HeaderProvider';
import RecipesProvider from '../context/RecipesProvider';
import RecommendationsProvider from '../context/RecommendationsProvider';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import FavProvider from '../context/FavProvider';

describe('Componente Favorite Recipes', () => {
  test('Testes os botoes das categorias', async () => {
    const mockfavs = [{
      id: '111',
      type: 'meal',
      nationality: 'brasil',
      category: 'vegan',
      alcoholicOrNot: 'not',
      name: 'podrão',
      image: '',
    }, {
      id: '111',
      type: 'drink',
      nationality: '',
      category: 'vegan',
      alcoholicOrNot: 'not',
      name: 'podrão',
      image: '',
    }];

    localStorage.setItem('favoriteRecipes', JSON.stringify(mockfavs));
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
    const catMeals = screen.getByRole('button', {
      name: /meals/i,
    });

    const catDrinks = screen.getByRole('button', {
      name: /drink/i,
    });

    const catAll = screen.getByRole('button', {
      name: /all/i,
    });

    userEvent.click(catMeals);
    userEvent.click(catDrinks);
    userEvent.click(catAll);

    // const btnShare = screen.getByTestId('0-horizontal-share-btn');
    // const btnHeart = screen.getByTestId('0-horizontal-favorite-btn');

    // window.clipboard;
    // userEvent.click(btnShare);
    // userEvent.click(btnHeart);
  });
});
