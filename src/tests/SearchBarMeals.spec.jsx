import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import HeaderProvider from '../context/headerProvider';
import App from '../App';

const email = 'trybeteste@hotmail.com';
const senha = '12345678';

describe('Testes das requisições das Apis', () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });

  test('Testando a requisição da Api meals/ingredient', async () => {
    render(
      <HeaderProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
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
});
