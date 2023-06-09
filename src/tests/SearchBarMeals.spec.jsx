import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import HeaderProvider from '../context/HeaderProvider';
import App from '../App';
import RecipesProvider from '../context/RecipesProvider';
import { renderWithRouter } from '../helpers/renderWith';
import RecommendationsProvider from '../context/RecommendationsProvider';

const email = 'trybeteste@hotmail.com';
const senha = '12345678';

describe('Testes das requisições das Apis', () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue({ meals: [] }),
  });

  window.alert = jest.fn;

  test('Testando a requisição da Api meals/ingredient', async () => {
    render(
      <HeaderProvider>
        <RecipesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipesProvider>
      </HeaderProvider>,
    );

    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByPlaceholderText(/senha:/i);
    const btnEntrar = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(inputEmail, email);
    userEvent.type(inputSenha, senha);
    userEvent.click(btnEntrar);

    const ingredient = await screen.findByText(/ingredient:/i);
    const btnBusca = await screen.findByRole('button', {
      name: /buscar/i,
    });
    const imgSearch = await screen.findByRole('img', {
      name: /searchicon/i,
    });

    expect(ingredient).toBeInTheDocument();
    expect(imgSearch).toBeInTheDocument();
    expect(btnBusca).toBeInTheDocument();
    userEvent.click(imgSearch);
    const inputSearchEl = screen.getByRole('textbox');

    userEvent.type(inputSearchEl, 'rice');
    userEvent.click(ingredient);
    userEvent.click(btnBusca);

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=rice');
  });

  test('Testando a requisição da Api meals/name', async () => {
    render(
      <HeaderProvider>
        <RecipesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipesProvider>
      </HeaderProvider>,
    );

    const name = await screen.findByText(/name:/i);
    const btnBusca = await screen.findByRole('button', {
      name: /buscar/i,
    });
    const imgSearch = await screen.findByRole('img', {
      name: /searchicon/i,
    });

    expect(imgSearch).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(btnBusca).toBeInTheDocument();

    userEvent.click(imgSearch);
    const inputSearchEl = screen.getByRole('textbox');
    userEvent.type(inputSearchEl, 'rice');
    userEvent.click(name);
    userEvent.click(btnBusca);

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=rice');
  });
  test('Testando a requisição da Api meals/FirsLetter', async () => {
    render(
      <HeaderProvider>
        <RecipesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipesProvider>
      </HeaderProvider>,
    );

    const FirstLetter = await screen.findByText(/first letter:/i);
    const btnBusca = await screen.findByRole('button', {
      name: /buscar/i,
    });
    const imgSearch = await screen.findByRole('img', {
      name: /searchicon/i,
    });

    expect(imgSearch).toBeInTheDocument();
    expect(FirstLetter).toBeInTheDocument();
    expect(btnBusca).toBeInTheDocument();

    userEvent.click(imgSearch);
    const inputSearchEl = screen.getByRole('textbox');
    userEvent.type(inputSearchEl, 'a');
    userEvent.click(FirstLetter);
    userEvent.click(btnBusca);

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  });
  test('Testando a requisição da Api Radio buttons invalid Meals', async () => {
    render(
      <HeaderProvider>
        <RecipesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipesProvider>
      </HeaderProvider>,
    );

    const btnBusca = await screen.findByRole('button', {
      name: /buscar/i,
    });
    const imgSearch = await screen.findByRole('img', {
      name: /searchicon/i,
    });

    userEvent.click(imgSearch);
    const inputSearchEl = screen.getByRole('textbox');
    userEvent.type(inputSearchEl, 'a');
    userEvent.click(btnBusca);
  });

  test('testa a função alert', async () => {
    render(
      <HeaderProvider>
        <RecipesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipesProvider>
      </HeaderProvider>,
    );

    window.alert = jest.fn();

    const FirstLetter = await screen.findByText(/first letter:/i);
    const btnBusca = await screen.findByRole('button', {
      name: /buscar/i,
    });
    const imgSearch = await screen.findByRole('img', {
      name: /searchicon/i,
    });

    userEvent.click(imgSearch);
    const inputSearchEl = screen.getByRole('textbox');
    userEvent.type(inputSearchEl, 'aa');
    userEvent.click(FirstLetter);
    userEvent.click(btnBusca);

    const spy = jest.spyOn(global, 'alert');
    userEvent.click(btnBusca);
    expect(spy).toHaveBeenCalled();
  });

  test('verifica se a rota do pathname é alterada', async () => {
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
  });
});
