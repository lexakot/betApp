import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;

export const Number = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const NumberValue = styled.Text`
  font-size: 32px;
  color: white;
`;
