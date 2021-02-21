import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { FaSignInAlt, FaUserAlt, FaLock, FaMailBulk } from 'react-icons/fa';

import { Container, Account } from './styles';
import { Form } from '@unform/web';

import Input from '../../components/Input';

function SignUp() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string()
          .required('Email is required.')
          .email('Type in a valid email.'),
        password: Yup.string().min(6, 'At least 6 digits.'),
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
        <span>Sign Up</span>
      </h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input icon={FaUserAlt} name="name" placeholder="Name" />
        <Input icon={FaMailBulk} name="email" placeholder="Email" />
        <Input
          icon={FaLock}
          name="password"
          type="password"
          placeholder="Password"
        />

        <button type="submit">Sign up</button>
      </Form>

      <Account>
        <p>Already have an account?</p>
        <Link to="/">Sign in now!</Link>
      </Account>
    </Container>
  );
}

export default SignUp;
