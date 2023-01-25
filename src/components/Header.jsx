import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const notSearch = ['Profile', 'Done Recipes', 'Favorite Recipes'];

  return (
    <>
      <h1 data-testid="page-title">{ title }</h1>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="profileIcon"
      />
      { !notSearch.includes(title) && <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="searchIcon"
      />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
