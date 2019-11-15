import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-color: ${({ color }) => color};
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  color: ${({ color }) => color};
`;
