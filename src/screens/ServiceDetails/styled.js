import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: blue;
  position: relative;
`;

export const BackgroundImage = styled.Image`
  height: 100%;
`;

export const BackgroundWrapper = styled.View`
  height: 55%;

`;
export const DetailsContainer = styled.View`
  width: 100%;
  height: 50%;
  border-top-left-radius: 30;
  border-top-right-radius: 30;
  background-color: white;
  position: absolute;
  bottom: 0;
  z-index: 2222;
  padding: 25px 30px;
  justify-content: space-between;
`;

export const ServiceTitle = styled.Text`
  font-size: 14px;
  line-height: 19px;
`;

export const CompanyName = styled.Text`
  font-size: 12px;
  line-height: 16px;
`;

export const DetailsActionsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 12px;
  line-height: 25px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const Action = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30;
  background-color: blue;
  margin-right: 13px;
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