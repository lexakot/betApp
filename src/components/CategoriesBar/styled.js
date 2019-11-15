import styled from 'styled-components';

export const Container = styled.View`
  height: 50;
`;
export const StyledScrollView = styled.ScrollView`
  
`;

export const Tag = styled.TouchableOpacity`
  padding: 0 10px;
  height: 35;
  background-color: ${({ picked, theme }) => (picked ? theme.primaryBlue : theme.white)};
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  flex-direction: row;
  border-radius: 5px;
`;

export const TagText = styled.Text`
  color: ${({ picked }) => (picked ? 'white' : '#666666')};
`;

export const TagIcon = styled.Image`

`;
