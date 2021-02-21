import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    text-align: center;
    width: 10rem;
    padding: 0.5rem;
    border-radius: 5px;
    background: #f0460e;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #f0460e transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
