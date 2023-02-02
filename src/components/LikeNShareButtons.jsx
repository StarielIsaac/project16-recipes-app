import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { IoMdLink } from 'react-icons/io';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function LikeNShareButtons(props) {
  const { index, id, type } = props;
  const [clickEvent, setClickEvent] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [path, setPath] = useState('');

  const copyButton = new Clipboard('#copy-button', {
    text: () => path });

  const timer = 500;
  copyButton.on('success', (e) => {
    e.clearSelection();

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, timer);
  });

  const cinco = 5;
  const vinteECinco = 25;

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-horizontal-favorite-btn` }
        style={ { borderRadius: '100%', padding: '8px', backgroundColor: '#ff6e5e' } }
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
        onClick={ (e) => {
          if (type === 'Drink') {
            console.log(e);
            setClickEvent(e);
            setPath(`http://localhost:3000/drinks/${id}`);
          } if (type === 'Meal') {
            setClickEvent(e);
            setPath(`http://localhost:3000/meals/${id}`);
          }
        } }
        style={ {
          borderRadius: '100%',
          padding: '8px',
          backgroundColor: 'lightblue',
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
          <IoMdLink />
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
