import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import HeaderProvider from '../context/HeaderProvider';
import RecipesProvider from '../context/RecipesProvider';
import RecommendationsProvider from '../context/RecommendationsProvider';

const email = 'trybeteste@hotmail.com';
const senha = '12345678';

describe('Componente RecipesDetails', () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue({ meals: [{
      idMeal: '52977',
      strMeal: 'Corba',
    }, {
      idMeal: '53987',
      strMeal: 'arroz' }] }),
  });

  test('aaaaaaaaaaaaaaaaaaaaaa', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ meals: [{ idMeal: 52871 }] }),
    });

    const { history } = renderWithRouter(
      <HeaderProvider>
        <RecipesProvider>
          <RecommendationsProvider>
            <App />
          </RecommendationsProvider>
        </RecipesProvider>
      </HeaderProvider>
      ,
    );

    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByPlaceholderText(/senha:/i);
    const btnEntrar = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(inputEmail, email);
    userEvent.type(inputSenha, senha);
    userEvent.click(btnEntrar);

    const FirstLetter = screen.getByText(/first letter:/i);
    const btnBusca = screen.getByRole('button', {
      name: /buscar/i,
    });
    const imgSearch = screen.getByRole('img', {
      name: /searchicon/i,
    });

    userEvent.click(imgSearch);
    const inputSearchEl = screen.getByRole('textbox');
    userEvent.type(inputSearchEl, 'y');
    userEvent.click(FirstLetter);
    userEvent.click(btnBusca);

    await new Promise((push) => { setTimeout(push, 100); });
    expect(history.location.pathname).toBe('/meals/52871');

    const btnShare = screen.getByRole('button', {
      name: /compartilhar/i,
    });

    const btnFavorite = screen.getByRole('button', {
      name: /favoritar/i,
    });

    await new Promise((push) => { setTimeout(push, 100); });

    // const name = screen.getByTestId('recipe-title');
    // const ingredient = await screen.findByTestId('0-ingredient-name-and-measure');

    await new Promise((push) => { setTimeout(push, 100); });
    const strRecipe = screen.getByRole('button', {
      name: /start recipe/i,
    });

    expect(btnShare).toBeInTheDocument();
    expect(btnFavorite).toBeInTheDocument();
    // expect(name).toBeInTheDocument();
    // expect(ingredient).toBeInTheDocument();

    userEvent.click(btnShare);
    userEvent.click(btnFavorite);
    userEvent.click(strRecipe);
  });
});
