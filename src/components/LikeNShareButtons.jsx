/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import FavContext from '../context/FavContext';

function LikeNShareButtons({ index, id, type }) {
  const { dataFavorites, setDataFavorites } = useContext(FavContext);
  const [clickEvent, setClickEvent] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [path, setPath] = useState('');
  const copyButton = new Clipboard('#copy-button', {
    text: () => path });

  const timer = 500;
  copyButton.on('success', (e) => {
    e.clearSelection();

    setTimeout(() => { setIsCopied(false); }, timer);
  });

  const removeRecipe = () => {
    const newData = dataFavorites.filter((recipe) => recipe.id !== id);

    setDataFavorites(newData);
    // localStorage.clear();
    localStorage.setItem('favoriteRecipes', JSON.stringify(newData));
  };

  const cinco = 5;
  const vinteECinco = 25;

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        style={ {
          borderRadius: '100%',
          padding: '8px',
          backgroundColor: '#ff6e5e',
          border: 'none',
        } }
        onClick={ () => removeRecipe() }
      >
        <img
          src={ blackHeartIcon }
          type="image/svg+xml"
          alt="BlackHeart Icon"
          width="30px"
        />
      </button>
      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
        id="copy-button"
        src={ shareIcon }
        onClick={ (e) => {
          setIsCopied(true);
          setPath(`http://localhost:3000/${type === 'drink' ? 'drinks' : 'meals'}/${id}`);
          setClickEvent(e);
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

export default LikeNShareButtons;
