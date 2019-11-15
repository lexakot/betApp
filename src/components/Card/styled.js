import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  height: 186px;
  width: 100%;
  background-color: #F3F4F7;
  border-radius: 10px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Avatar = styled.Image`

`;

export const InfoContainer = styled.View`

  height: 100%;
  padding-left: 20px;
`;

export const CategoryName = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 25px;
  color: #666666;
`;

export const Title = styled.Text`

`;

export const PriceContainer = styled.TouchableOpacity`
  margin-top: 15px;
  background: #2ECC71;
  border-radius: 5px;
  width: 53px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const PriceText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0;
  bottom: 12;
`;

export const Action = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20;
  background-color: white;
  margin-right: 13px;
`;
