import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Footer from '../components/Footer';

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
