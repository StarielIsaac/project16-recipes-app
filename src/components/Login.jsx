import React, { useEffect, useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isButton, setIsButton] = useState(true);

  const verificationButton = () => {
    const regex = /\S+@\S+\.\S+/;
    const minNumber = 5;
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
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
  };

  useEffect(() => {
    verificationButton();
  }, [senha]);

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
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>

  );
}

export default Login;
