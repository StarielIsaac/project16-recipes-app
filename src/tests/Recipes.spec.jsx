import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import HeaderProvider from '../context/HeaderProvider';
import RecipesProvider from '../context/RecipesProvider';

const email = 'trybeteste@hotmail.com';
const senha = '12345678';

describe('Componente Recipes', () => {
  test('Verifica se existem os 5 buttons das categorias meals', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ meals: [
        { strCategory: 'a' },
        { strCategory: 'b' },
        { strCategory: 'c' },
        { strCategory: 'd' },
        { strCategory: 'e' },
        { strCategory: 'f' },
        { strCategory: 'g' },
      ] }),
    });

    renderWithRouter(
      <HeaderProvider>
        <RecipesProvider>
          <App />
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

    await new Promise((fetch) => { setTimeout(fetch, 100); });
    const btnA = screen.getByRole('button', {
      name: 'a',
    });
    const btnB = screen.getByRole('button', {
      name: 'b',
    });
    const btnC = screen.getByRole('button', {
      name: 'c',
    });
    const btnD = screen.getByRole('button', {
      name: 'd',
    });
    const btnE = screen.getByRole('button', {
      name: 'e',
    });

    expect(btnA).toBeInTheDocument();
    expect(btnB).toBeInTheDocument();
    expect(btnC).toBeInTheDocument();
    expect(btnD).toBeInTheDocument();
    expect(btnE).toBeInTheDocument();
  });

  test('Verifica se existem os 5 buttons das categorias drinks', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ drinks: [
        { strCategory: 'aa' },
        { strCategory: 'bb' },
        { strCategory: 'cc' },
        { strCategory: 'dd' },
        { strCategory: 'ee' },
        { strCategory: 'ff' },
        { strCategory: 'gg' },
      ] }),
    });

    renderWithRouter(
      <HeaderProvider>
        <RecipesProvider>
          <App />
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

    await new Promise((fetch) => { setTimeout(fetch, 100); });
    const btnAA = screen.getByRole('button', {
      name: 'aa',
    });
    const btnBB = screen.getByRole('button', {
      name: 'bb',
    });
    const btnCC = screen.getByRole('button', {
      name: 'cc',
    });
    const btnDD = screen.getByRole('button', {
      name: 'dd',
    });
    const btnEE = screen.getByRole('button', {
      name: 'ee',
    });

    expect(btnAA).toBeInTheDocument();
    expect(btnBB).toBeInTheDocument();
    expect(btnCC).toBeInTheDocument();
    expect(btnDD).toBeInTheDocument();
    expect(btnEE).toBeInTheDocument();
  });
});
