/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import FavContext from '../context/FavContext';
import { setFavoriteRecipesStorage } from '../helpers/SetStorageFunctions';
import RecommendationsContext from '../context/RecommendationsContext';
import { withRouter } from 'react-router-dom';

function LikeNShareButtons({ index, id, type, history }) {
  const { dataFavorites, setDataFavorites } = useContext(FavContext);
  const { recipeDetailsRender } = useContext(RecommendationsContext);
  const [clickEvent, setClickEvent] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const { favorite, setFavorite } = useContext(FavContext);

  useEffect(() => {
    const stored = localStorage.getItem('favoriteRecipes');
    const storedRecipes = JSON.parse(stored) || [];
    const isFavorite = storedRecipes.some((recipe) => recipe.id === id);
    return setFavorite(isFavorite);
  });

  useEffect(() => {

  }, [favorite]);

  const timer = 500;
  const disabledLinkCopied = () => {
    setTimeout(() => { setIsCopied(false); }, timer);
  };

  const removeRecipe = () => {
    console.log('teste');
    const newData = dataFavorites.filter((recipe) => recipe.id !== id);
    setDataFavorites(newData);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newData));
  };

  const cinco = 5;
  const vinteECinco = 25;

  return (
    <div>
      {/* { favorite ? <p>true</p> : <p>false</p>} */}
      <button
        type="button"
        data-testid={ !history.location.pathname.includes('favorite')
          ? 'favorite-btn'
          : `${index}-horizontal-favorite-btn` }
        src={ !favorite ? blackHeartIcon : whiteHeartIcon }
        style={ {
          borderRadius: '100%',
          padding: '8px',
          backgroundColor: '#ff6e5e',
          border: 'none',
        } }
        onClick={ !favorite
          ? () => setFavoriteRecipesStorage(recipeDetailsRender)
          : () => removeRecipe() }
      >
        <img
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          type="imge'svg+xml'"
          alt={ favorite ? 'BlackHeart Icon' : 'WhiteHeart Icon' }
          width="30px"
        />
      </button>
      <button
        type="button"
        data-testid={ !history.location.pathname.includes('favorite')
          ? 'share-btn'
          : `${index}-horizontal-share-btn` }
        id="copy-button"
        src={ shareIcon }
        onClick={ (e) => {
          setIsCopied(true);
          clipboardCopy(`http://localhost:3000/${type === 'drink' ? 'drinks' : 'meals'}/${id}`);
          setClickEvent(e);
          disabledLinkCopied();
        } }
        style={ {
          borderRadius: '100%',
          padding: '8px',
          backgroundColor: 'lightblue',
          border: 'none',
        } }
      >
        <img
          src={ shareIcon }
          type="image/svg+xml"
          alt="Share Icon"
          width="30px"
        />
      </button>
      {isCopied && (
        <div
          style={ {
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
            padding: '2px 5px 2px 5px',
            fontSize: '15px',
            position: 'absolute',
            top: clickEvent ? clickEvent.pageY - cinco : 0,
            left: clickEvent ? clickEvent.pageX + vinteECinco : 0,
          } }
        >
          Link copied!
        </div>
      ) }
    </div>
  );
}
LikeNShareButtons.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default withRouter(LikeNShareButtons);
