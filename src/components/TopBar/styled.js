import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const PopularButton = styled.TouchableOpacity`
  width: 55px;
  height: 50px;
  position: absolute;
  left: 0;
  border-bottom-width: 6px;
  border-color: ${({ isSelected }) => isSelected ? '#2b8beb' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 2222;
`;

export const Separator = styled.View`
  height: 20px;
  width: 2px;
  background-color: #f4f4f4;
  position: absolute;
  left: 55px;
  top: 13px;
  z-index: 22222;
`;

export const CategoryButton = styled.TouchableOpacity`
  width: 55px;
  height: 50px;
  background-color: white;
  border-bottom-width: 6px;
  /* border-color: #2b8beb; */
  border-color: ${({ isSelected }) => isSelected ? '#2b8beb' : 'white'};
`;

export const PopularIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const CategoryIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const StyledCrollView = styled.ScrollView`
  padding-left: 60px;
  padding-right: 50px;
`;

export const BlankView = styled.View`
  width: 60px;
  height: 50px;
  background-color: white;
`;
