import styled from 'styled-components';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 22;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  background-color: white;
`;

export const Spinner = styled.ActivityIndicator`
  z-index: 2222;
`;
