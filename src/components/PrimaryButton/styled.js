import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: ${({ theme, isRevertColor }) => (isRevertColor ? theme.primaryOrange : theme.white)};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme, isRevertColor }) => (isRevertColor ? theme.white : theme.primaryOrange)};
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
`;
