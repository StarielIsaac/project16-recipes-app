import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeInProgress from '../components/RecipeInProgress';

describe('Componente RecipeInProgress...', () => {
  render(
    <BrowserRouter>
      <RecipeInProgress />
    </BrowserRouter>,
  );
  test('os buttons são renderizados corretamente na página', () => {
    const btnCompartilhar = screen.getByTestId('share-btn');
    const btnFavoritar = screen.getByTestId('favorite-btn');
    const btnFinalizar = screen.getByTestId('finish-recipe-btn');

    expect(btnCompartilhar).toBeInTheDocument();
    expect(btnFavoritar).toBeInTheDocument();
    expect(btnFinalizar).toBeInTheDocument();
  });
  test('', () => {

  });
  test('', () => {

  });
});
