import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isButton, setIsButton] = useState(true);

  const verificationButton = () => {
    const regex = /\S+@\S+\.\S+/;
    const minNumber = 6;
    const isValid = regex.test(email);
    if (isValid === true && senha.length > minNumber) {
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'senha') {
      setSenha(event.target.value);
    } if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
  };

  useEffect(() => {
    verificationButton();
  }, [senha]);

  const submitButton = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  return (
    <div>
      <label htmlFor="'input-email'">
        <input
          id="input-email"
          type="email"
          data-testid="email-input"
          placeholder="Email:"
          onChange={ handleChange }
          name="email"
          value={ email }
        />
      </label>
      <label htmlFor="input-senha">
        <input
          id="input-senha"
          type="password"
          data-testid="password-input"
          placeholder="Senha:"
          onChange={ handleChange }
          name="senha"
          value={ senha }
        />
      </label>
      <button
        type="button"
        disabled={ isButton }
        onClick={ submitButton }
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
