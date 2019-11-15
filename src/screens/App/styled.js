import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 130px 37px 0px 37px;
`;

export const Title = styled.Text`
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const Heading = styled.Image`

`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  color: white;
  text-align: center;
`;

export const SocialWrapper = styled.View`
  width: 115px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SocialIcon = styled.Image`
  
`;

export const PerformerButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.primaryOrange};
  justify-content: center;
  align-items: center;
`;
