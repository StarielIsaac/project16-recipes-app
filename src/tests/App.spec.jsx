import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';

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
});
