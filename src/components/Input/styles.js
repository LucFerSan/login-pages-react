import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;

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

  & + div {
    margin-top: 2rem;
  }

  svg {
    margin-right: 1rem;
  }
`;
