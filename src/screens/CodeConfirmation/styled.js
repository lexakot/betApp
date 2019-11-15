import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 33px;
  color: white;
`;

export const Description = styled.Text`
  margin-top: 15px; 
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: white;
`;

export const InputContainer = styled.View`
  margin-top: 30px;
  width: 327px;
  height: 100px;
  border-width: ${({ error }) => (error ? '3px' : '1px')};
  border-color: ${({ error }) => (error ? 'red' : 'white')};;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 70px;
`;

export const ResendButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: -30;
`;

export const ResendText = styled.Text`
  font-size: 14px;
  line-height: 19px;
  color: white;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  bottom: -30;
  right: 0;
  color: red;
`;
