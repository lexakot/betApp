import React from 'react';
import moment from 'moment';
import { Linking, ImageBackground } from 'react-native';

import BetStorage from '@services/storage/bet';
import iconsLikeActive from '@images/iconsLikeActive.png';
import iconsLikeInActive from '@images/iconsLikeInActive.png';
import bgBet from '@images/bgBet3.png';
import nextIcon from '@images/move-to-next.png';

import * as S from './styled';

const source = 'http://api-taptobet.somee.com/';

class Card extends React.Component {
  state = {
    isLiked: false,
    likesCount: this.props.bet.likesCount,
  }

  async componentDidMount() {
    const ids = await BetStorage.getIdFromArray();
    if (ids && ids.find(i => i === this.props.bet.id)) {
      this.setState({ isLiked: true });
    }
  }

  onLikePress = async () => {
    const { isLiked } = this.state;
    this.props.onLikePress(this.props.bet.id, this.state.isLiked);
    await BetStorage.setIdToArray(this.props.bet.id);
    this.setState({ isLiked: !this.state.isLiked, likesCount: isLiked ? (this.state.likesCount - 1) : (this.state.likesCount + 1) });
  }

  onLinkPress = () => {
    this.props.onLinkPress(this.props.bet.link.id);
    Linking.openURL(this.props.bet.link.link)
  };

  render() {
    const { bet } = this.props;
    const { isLiked, likesCount } = this.state;
    return (
      <S.Container>
        <S.CupTitle>{bet.championship}</S.CupTitle>
        <S.TableContainer>
          <S.TeamContainer>
            <S.TeamRow>
              <S.TeamImage source={{ uri: `${source}${bet.team1.imagePath}` }} />
              <S.TeamName>{bet.team1.name}</S.TeamName>
            </S.TeamRow>
            <S.TeamRow>
              <S.TeamImage source={{ uri: `${source}${bet.team2.imagePath}` }} />
              <S.TeamName>{bet.team1.name}</S.TeamName>
            </S.TeamRow>
          </S.TeamContainer>
          <S.TimeContainer>
            <S.DateContainer>
              <S.DayText>{moment.utc(bet.betDate).date()}</S.DayText>
              <S.MonthText>{moment.utc(bet.betDate).format('MMM')}</S.MonthText>
            </S.DateContainer>
            <S.TimesContainer>
              <S.TimeText>{moment.utc(bet.betDate).hour()}:{moment.utc(bet.betDate).minute()}</S.TimeText>
            </S.TimesContainer>
          </S.TimeContainer>
        </S.TableContainer>
        <S.WinnerText>{bet.forecastLongName}</S.WinnerText>
        <S.LabelContainer>
          <S.LabelText>{bet.forecastShortName}</S.LabelText>
        </S.LabelContainer>
        <S.TransitionContainer onPress={this.onLinkPress}>
          <S.ImageBg source={bgBet} >
            <S.RatioText>{bet.ratio}</S.RatioText>
            <S.ControlWrapper>
              <S.PartnerImage source={{ uri: `${source}${bet.link.imagePath}` }} />
              <S.ArrowIcon source={nextIcon} />
            </S.ControlWrapper>
          </S.ImageBg>
        </S.TransitionContainer>
        <S.BottomContainer>
          <S.LikeButton onPress={this.onLikePress}>
            <S.LikeIcon source={isLiked ? iconsLikeActive : iconsLikeInActive} />
            <S.LikesNumber>{likesCount}</S.LikesNumber>
          </S.LikeButton>
          <S.SourceContainer>
            <S.SourceText>Источник:</S.SourceText>
            <S.SourceText>{bet.source}</S.SourceText>
          </S.SourceContainer>
        </S.BottomContainer>
      </S.Container>
    );
  };
}

export default Card;
