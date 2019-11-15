import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  margin-top: 20px;
`;

export const ImageContainer = styled.View`
  height: 120px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 140px;
  height: 80px;
`;

export const TransitionButton = styled.View`
  height: 60px;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0px 21px;
  justify-content: space-between;
`;

export const BonusText = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: black;
  font-weight: bold;
`;

export const ArrowIcon = styled.Image`
  width: 12px;
  height: 12px;
`;
