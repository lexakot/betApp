import styled from 'styled-components';

export const Block = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${({ touched }) => (touched ? 'white' : 'rgba(252, 252, 252, 0.6)')};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  color: ${({ touched }) => (touched ? 'blue' : 'white')};
`;
