import styled from 'styled-components';

export const Container = styled.View`
  height: 420px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  margin-top: 10px;
  padding: 15px 20px;
`;

export const CupTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f4f4f4;
`;

export const TableContainer = styled.View`
  height: 110px;
  width: 100%;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #f4f4f4;
  flex-direction: row;
  padding: 10px 0;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const TimeContainer = styled.View`
  border-width: 1px;
  border-color: #f4f4f4;
  border-radius: 5px;
  width: 70px;
`;

export const DateContainer = styled.View`
  height: 57px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-width: 1px;
  border-color: #f4f4f4;
  align-items: center;
  justify-content: center;
`;

export const DayText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const MonthText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TimesContainer = styled.View`
  height: 32px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const TeamContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TeamRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TeamImage = styled.Image`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`;

export const TeamName = styled.Text`
  font-size: 18px;
  line-height: 20px;
  color: black;
  font-weight: bold;
`;

export const WinnerText = styled.Text`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
`;

export const LabelContainer = styled.View`
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: #bbecff;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const LabelText = styled.Text`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
`;

export const TransitionContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

export const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 15px;
  border-radius: 5px;
`;

export const RatioText = styled.Text`
  font-size: 30px;
  line-height: 30px;
  font-weight: bold;
`;

export const PartnerImage = styled.Image`
  width: 80px;
  height: 28px;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
`;

export const LikeButton = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #f4f4f4;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LikeIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const LikesNumber = styled.Text`
  font-size: 16px;
`;

export const SourceContainer = styled.View`

`;

export const SourceText = styled.Text`
  color: #c1c1c1;
  font-size: 14px;
`;

export const ArrowIcon = styled.Image`
  width: 12px;
  height: 12px;
  margin-left: 10px;
`;

export const ControlWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
