import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SeparatorPart = styled.View`
  width: 30%;
  height: 1px;
  background-color: ${({ theme }) => theme.white};
`;

export const Title = styled.Text`
  margin: 0 9px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`;
