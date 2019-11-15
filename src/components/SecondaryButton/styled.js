import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-color: ${({ theme }) => theme.white};
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.white};
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
`;
