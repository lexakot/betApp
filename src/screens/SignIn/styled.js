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
  align-self: center;
  width: 80%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ForgotPasswordLink = styled.TouchableOpacity`
  margin-top: 20px;
  opacity: 0.6;
`;

export const ForgotPasswordText = styled.Text`
  font-style: normal;
  font-weight: 100;
  font-size: 13px;
  line-height: 18px;
`;

export const HintText = styled.Text`
  color: #3C4859;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

export const CreateAccountLink = styled.TouchableOpacity`

`;

export const CreateAccountText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: blue;
`; // TODO: extend to BaseText(HintText above)

export const CreateAccountWrapper = styled.View`
  position: absolute;
  bottom: 20;
  flex-direction: row;
`;
