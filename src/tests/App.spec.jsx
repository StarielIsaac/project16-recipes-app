import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Footer from '../components/Footer';

const email = 'trybeteste@hotmail.com';
const senha = '12345678';

describe('Componente Header', () => {
  test('Verifica se existe um title e uma image de profile', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const titleProfile = screen.getByTestId('page-title');
    const imgProfile = screen.getByRole('img', {
      name: /profileicon/i,
    });

    expect(titleProfile).toBeInTheDocument();
    expect(imgProfile).toBeInTheDocument();
  });

  test(
    'Verifica se existe o icon Search e se aparece/desaparece o inputSearch ao clicar',
    () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const imgSearch = screen.getByRole('img', {
        name: /searchicon/i,
      });

      userEvent.click(imgSearch);
      const inputSearch = screen.getByRole('textbox');
      expect(inputSearch).toBeInTheDocument();

      userEvent.click(imgSearch);
      expect(inputSearch).not.toBeInTheDocument();

      expect(imgSearch).toBeInTheDocument();
    },
  );
});

describe('Componente Login', () => {
  test('Verifica se existem os inputs "email", "senha" e o botão "entrar"', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByPlaceholderText(/senha:/i);
    const btnEntrar = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(btnEntrar).toBeInTheDocument();
  });

  test('Verifica se ao digitar email e senha o botão entrar é habilitado', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByPlaceholderText(/senha:/i);
    const btnEntrar = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(inputEmail, email);
    userEvent.type(inputSenha, senha);

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(btnEntrar).toBeInTheDocument();
    expect(btnEntrar).toBeEnabled();

    userEvent.click(btnEntrar);
  });
  describe('Componente Footer', () => {
    test('Se os elementos do footer são renderizados na página', () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const mealImg = screen.getByRole('img', {
        name: /meal icon/i,
      });
      const drinkImg = screen.getByRole('img', {
        name: /drink icon/i,
      });

      expect(mealImg).toBeInTheDocument();
      expect(drinkImg).toBeInTheDocument();
    });
    test('Se ao clicar no button drinks, a página é redirecionada', () => {
      const { history } = renderWithRouter(<App />);
      act(() => { history.push('/meals'); });

      const btnDrink = screen.getByRole('button', {
        name: /drink icon/i,
      });
      expect(btnDrink).toBeInTheDocument();
      userEvent.click(btnDrink);
      const { pathname } = history.location;
      expect(pathname).toBe('/drinks');
    });
    test('Se ao clicar no button meals, a página é redirecionada', () => {
      const { history } = renderWithRouter(<App />);
      act(() => { history.push('/drinks'); });

      const btnMeal = screen.getByRole('button', {
        name: /meal icon/i,
      });
      expect(btnMeal).toBeInTheDocument();
      userEvent.click(btnMeal);
      const { pathname } = history.location;
      expect(pathname).toBe('/meals');
    });
  });
});
