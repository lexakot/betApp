import React from 'react';
import { Container, Spinner } from './styled';

const Loader = () => (
  <Container>
    <Spinner size="large" color="#000" />
  </Container>
);

export default Loader;
