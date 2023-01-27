import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import HeaderProvider from '../context/headerProvider';

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
        <HeaderProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </HeaderProvider>,
      );

      const imgSearch = screen.getByRole('img', {
        name: /searchicon/i,
      });

      userEvent.click(imgSearch);
      const inputSearchEl = screen.getByRole('textbox');
      expect(inputSearchEl).toBeInTheDocument();

      userEvent.type(inputSearchEl, 'rice');
      expect(inputSearchEl.value).toBe('rice');

      userEvent.click(imgSearch);
      expect(inputSearchEl).not.toBeInTheDocument();

      expect(imgSearch).toBeInTheDocument();
    },
  );
});
