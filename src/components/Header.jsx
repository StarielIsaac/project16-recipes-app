import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderContext from '../context/HearderContext';

function Header({ title }) {
  const [inputDisable, setInputDisable] = useState(false);
  const { valueInputSearch, setValueInputSearch } = useContext(HeaderContext);

  const notSearch = ['Profile', 'Done Recipes', 'Favorite Recipes'];

  const inputSearch = () => {
    setInputDisable(!inputDisable);
  };

  const handleChange = ({ target }) => {
    setValueInputSearch(target.value);
  };

  return (
    <>
      <h1 data-testid="page-title">{ title }</h1>
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
        />
      </Link>

      { !notSearch.includes(title)

      && (
        <button type="button" onClick={ inputSearch }>
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="searchIcon"
          />
        </button>)}
      {inputDisable && (
        <input
          data-testid="search-input"
          type="text"
          value={ valueInputSearch }
          onChange={ handleChange }
        />)}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: null,
};

export default Header;
