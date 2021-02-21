import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

function Input({ name, icon: Icon, ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#f0460e" />
        </Error>
      )}
    </Container>
  );
}

export default Input;
