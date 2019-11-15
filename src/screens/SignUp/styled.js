import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  align-self: flex-start;
`;

export const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

