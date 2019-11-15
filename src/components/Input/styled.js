import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  margin-top: 5px;
  justify-content: center;
`;

export const InputArea = styled.TextInput`
  width: 100%;
  height: 42px;
  padding-left: ${({ showPhoneMask }) => (showPhoneMask ? 47 : 12)};
  padding-top: 1px;
  border-color: ${({ error }) => (error ? 'red' : '#979797')};
`;

export const Placeholder = styled.Text`
  position: absolute;
  left: 0;
  color: ${({ error }) => (error ? 'red' : '#000')};
  font-weight: ${({ isFocused }) => (isFocused ? '600' : '100')};
  padding-right: 6;
  padding-left: 16;
`;

export const ShowPassword = styled.TouchableOpacity`
  width: 25;
  height: 25;
  background-color: transparent;
  position: absolute;
  right: 0;
`;

export const PaswwordIcon = styled.Image`

`;

export const ErrorText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: red;
`;

export const PhoneMask = styled.Text`
  position: absolute;
  left: 12;
`;
