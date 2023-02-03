import { useMemo, useState } from 'react';
import FavContext from './FavContext';
import newMock from '../services/MockRandomDrink';

function FavProvider({ children }) {
  const [dataFavorites, setDataFavorites] = useState(newMock);

  const values = useMemo(() => ({
    dataFavorites, setDataFavorites,
  }), [dataFavorites, setDataFavorites]);

  return (
    <FavContext.Provider value={ values }>
      { children }
    </FavContext.Provider>
  );
}

FavProvider.propTypes = {}.isRequired;

export default FavProvider;
