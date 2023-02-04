import { useMemo, useState } from 'react';
import FavContext from './FavContext';

function FavProvider({ children }) {
  const stored = localStorage.getItem('favoriteRecipes');
  const storedRecipes = JSON.parse(stored);
  const [dataFavorites, setDataFavorites] = useState(storedRecipes);
  const [favorite, setFavorite] = useState(false);

  const values = useMemo(() => ({
    dataFavorites, setDataFavorites, favorite, setFavorite,
  }), [dataFavorites, setDataFavorites, favorite, setFavorite]);

  return (
    <FavContext.Provider value={ values }>
      { children }
    </FavContext.Provider>
  );
}

FavProvider.propTypes = {}.isRequired;

export default FavProvider;
