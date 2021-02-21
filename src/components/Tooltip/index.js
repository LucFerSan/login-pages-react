import React from 'react';

import { Container } from './styles';

function Tooltip({ className, title, children }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;
