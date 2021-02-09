import React from 'react';

import { FaSignInAlt, FaUserAlt, FaLock, FaMailBulk } from 'react-icons/fa';

import { Container, InputContainer, Account } from './styles';

function Signup() {
  return (
    <Container>
      <h1>
        <FaSignInAlt />
        <span>Sign up</span>
      </h1>

      <form>
        <InputContainer>
          <FaUserAlt size={24} />
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </InputContainer>

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

        <button type="submit">Sign up</button>
      </form>

      <Account>
        <p>Already have an account?</p>
        <a href="/">Sign in now!</a>
      </Account>
    </Container>
  );
}

export default Signup;
