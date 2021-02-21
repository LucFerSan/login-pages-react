import styled from 'styled-components';

export const Container = styled.div`
  background: #29808c;
  width: 30rem;
  height: 35rem;

  h1 {
    background: #f0460e;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 500;

    span {
      margin-left: 2rem;
    }
  }

  form {
    padding: 2rem;
    margin-top: 2.5rem;

    button {
      margin: 0 auto;
      width: 60%;
      height: 1rem;
      border-radius: 1rem;
      border: 0;
      padding: 1.3rem 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      background: #f0460e;
      color: white;
      box-shadow: 2px 2px 8px -2px #000;
      transition: background 0.2 ease;
    }

    button:hover {
      background: #e23d06;
    }
  }

  @media (max-width: 767px) {
    width: 20rem;
    height: 35rem;
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  color: #fff;
  a {
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 0.5rem;
    color: #fff;
    font-weight: 700;
    transition: color 0.3s ease;
    position: relative;
  }

  a:hover {
    color: #ddd;
  }

  a::after {
    content: '';
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    position: absolute;
    background: #ddd;
    transition: width 0.3s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }
`;
