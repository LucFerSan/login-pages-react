import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { FaSignInAlt, FaLock, FaMailBulk } from 'react-icons/fa';

import { Container, Account } from './styles';
import { Form } from '@unform/web';

import Input from '../../components/Input';

function Signin() {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <h1>
        <FaSignInAlt />
        <span>Sign In</span>
      </h1>

      <Form onSubmit={handleSubmit}>
        <Input
          icon={FaMailBulk}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          icon={FaLock}
          name="password"
          type="password"
          placeholder="Password"
        />

        <button type="submit">Sign in</button>
      </Form>

      <Account>
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up now!</Link>
      </Account>
    </Container>
  );
}

export default Signin;
