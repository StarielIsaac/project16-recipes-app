import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from '../helpers/renderWith';
import Profile from '../pages/Profile';

describe('Página de Profile', () => {
  beforeEach(() => {
    window.localStorage.setItem('user', JSON.stringify({ email: 'trybe@test.com' }));
  });

  afterEach(() => {
    window.localStorage.clear();
  });
  test('os elementos são renderizados na página corretamente', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    const userEmail = screen.getByTestId('profile-email');
    expect(userEmail).toBeInTheDocument();
    expect(userEmail).toHaveTextContent('trybe@test.com');
  });
  test('existe um botão que ao clicar redireciona para Done Recipes ', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnDoneRecipes = screen.getByTestId('profile-done-btn');
    expect(btnDoneRecipes).toBeInTheDocument();

    userEvent.click(btnDoneRecipes);
    waitFor(() => expect(history.location.pathname).toBe('/done-recipes'));
  });
  test('existe um botão que ao clicar redireciona para Favorite Recipes ', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    expect(btnFavoriteRecipes).toBeInTheDocument();

    userEvent.click(btnFavoriteRecipes);
    waitFor(() => expect(history.location.pathname).toBe('/favorite-recipes'));
  });
  test('existe um botão que ao clicar redireciona para Login ', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnLogout = screen.getByTestId('profile-logout-btn');
    expect(btnLogout).toBeInTheDocument();

    userEvent.click(btnLogout);
    waitFor(() => expect(history.location.pathname).toBe('/'));
  });
  test('Se o email não existir no localStorage, redireciona para login', () => {
    window.localStorage.clear();
    const { history } = renderWithRouter(<Profile />);

    expect(history.location.pathname).toBe('/');
  });
});
