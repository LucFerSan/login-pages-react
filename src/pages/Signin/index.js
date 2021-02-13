import React from 'react';
import { Link } from 'react-router-dom';

import { FaSignInAlt, FaLock, FaMailBulk } from 'react-icons/fa';

import { Container, InputContainer, Account } from './styles';

function Signin() {
  return (
    <Container>
      <h1>
        <FaSignInAlt />
        <span>Sign In</span>
      </h1>

      <form>
        <InputContainer>
          <FaMailBulk size={24} />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </InputContainer>

        <InputContainer>
          <FaLock size={24} />
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </InputContainer>

        <button type="submit">Sign in</button>
      </form>

      <Account>
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up now!</Link>
      </Account>
    </Container>
  );
}

export default Signin;
