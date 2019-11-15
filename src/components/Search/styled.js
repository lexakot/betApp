import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const SearchContainer = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.lightGrey};
  /* width: ${({ showSearchModal }) => (showSearchModal ? '80%' : '100%')}; */
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

export const PlaceHolder = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 25px;
  color: #666666;
`;

export const SearchIcon = styled.Image`
  position: absolute;
  right: 0;
  z-index: 222222;
`;

export const CancelButton = styled.TouchableOpacity`
  /* right: ${({ showSearchModal }) => (showSearchModal ? 0 : '-200px')}; */
  margin-top: 15px;
  margin-left: 5px;
`;

export const CancelText = styled.Text`
  color: ${({ theme }) => theme.primaryBlue};
  font-size: 16px;
  line-height: 25px;
`;
