import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  color: #a2a2a2;

  width: 100%;
  height: 1.5rem;
  border-radius: 1rem;
  border: 2px solid #fff;
  padding: 1.3rem 1rem;

  input {
    font-size: 1rem;
    border: 0;
    background: transparent;
    flex: 1;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #000;
      border-color: #000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #000;
    `}

  & + div {
    margin-top: 2rem;
  }

  svg {
    margin-right: 1rem;
  }

  @media (max-width: 767px) {
    svg {
      margin-right: 0.5rem;
    }
  }
`;
