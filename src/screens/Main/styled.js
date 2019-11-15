import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  padding: 20px 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.primaryBlue};  
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
`;
// MOVE TO COMPONENTS
export const CategoriesButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.primaryOrange};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const CardsWrapper = styled.ScrollView`
  width: 100%;
`;

export const CategoriesButtonText = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.white};
`;

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: black;
  margin-top: 30px;
`;

