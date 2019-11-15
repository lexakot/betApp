import React from 'react';
import { Linking } from 'react-native';

import nextIcon from '@images/move-to-next.png';

import * as S from './styled';

const source = 'http://api-taptobet.somee.com/';

const Card = ({ bonus, onLinkClick }) => {
  const onLinkPress = () => {
    onLinkClick(bonus.link.id);
    Linking.openURL(bonus.link.link);
  };

  return (
    <S.Container onPress={onLinkPress}>
      <S.ImageContainer color={bonus.color}>
        <S.Logo source={{ uri: `${source}${bonus.imagePath}` }} />
      </S.ImageContainer>
      <S.TransitionButton>
        <S.BonusText>{bonus.description}</S.BonusText>
        <S.ArrowIcon source={nextIcon} />
      </S.TransitionButton>
    </S.Container>
  );
}

export default Card;
