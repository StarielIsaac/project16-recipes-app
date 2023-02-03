import { useMemo, useState } from 'react';
import FavContext from './FavContext';

function FavProvider({ children }) {
  const stored = localStorage.getItem('favoriteRecipes');
  const storedRecipes = JSON.parse(stored);
  const [dataFavorites, setDataFavorites] = useState(storedRecipes);

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
