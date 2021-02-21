import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { FaSignInAlt, FaLock, FaMailBulk } from 'react-icons/fa';

import { Container, Account } from './styles';
import { Form } from '@unform/web';

import Input from '../../components/Input';

function SignIn() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required.')
          .email('Type in a valid email.'),
        password: Yup.string().required('Password is required.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <h1>
        <FaSignInAlt />
        <span>Sign In</span>
      </h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input icon={FaMailBulk} name="email" placeholder="Email" />
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

export default SignIn;
