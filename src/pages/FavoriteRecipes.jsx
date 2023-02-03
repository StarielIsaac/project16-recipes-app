/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import Header from '../components/Header';
import LikeNShareButtons from '../components/LikeNShareButtons';
import FavContext from '../context/FavContext';

function FavoriteRecipes() {
  const { dataFavorites, setDataFavorites } = useContext(FavContext);
  const stored = localStorage.getItem('favoriteRecipes');
  const storedRecipes = JSON.parse(stored);

  useEffect(() => {
    setDataFavorites(storedRecipes);
  }, []);

  const filterByType = (typeParam) => {
    const filtered = storedRecipes
      .filter(({ type }) => type === typeParam);

    setDataFavorites(filtered);
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <br />
      <br />
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ () => filterByType('Meal') }
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterByType('Drink') }
      >
        Drinks
      </button>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setDataFavorites(storedRecipes) }
      >
        All
      </button>
      <br />
      <br />
      <br />
      {dataFavorites.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image"` }
            width="250px"
            style={ { borderRadius: '10%' } }
          />
          <br />
          <br />
          <p
            name="HorizontalName"
            data-testid={ `${index}-horizontal-name` }
          >
            {`${recipe.name}`}
          </p>
          <p
            name="HorizontalTopText"
            data-testid={ `${index}-horizontal-top-text` }
          >
            {recipe.nationality ? `${recipe.nationality} - ${recipe.category}`
              : `${recipe.alcoholicOrNot}`}
          </p>
          <LikeNShareButtons
            index={ index }
            id={ recipe.id }
            type={ recipe.type }
          />
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;
