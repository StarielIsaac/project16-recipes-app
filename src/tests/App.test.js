import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

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
