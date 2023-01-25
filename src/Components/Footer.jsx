import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer({ history }) {
  const clickHandle = (id) => {
    history.push(id);
    console.log(history);
  };

  return (
    <div className="footer" data-testid="footer">
      <button
        type="button"
        onClick={ () => clickHandle('/drinks') }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          type="image/svg+xml"
          alt="Drink Icon"
        />
      </button>
      <button
        type="button"
        onClick={ () => clickHandle('/meals') }
      >
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          type="image/svg+xml"
          alt="Meal Icon"
        />
      </button>
    </div>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Footer);
