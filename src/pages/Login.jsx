import React from 'react';
import Footer from '../Components/Footer';
// import PropTypes from 'prop-types';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
      <Footer />
    </div>
  );
}

Login.propTypes = {};

export default Login;
