import React from 'react';
import { Navigation } from 'react-native-navigation';
import background from '@images/Background.png';
import heading from '@images/Heading.png';
import arrowIcon from '@images/arrowIcon.png';

import * as S from './styled';

const Heading = ({ props }) => (
  <S.BackgroundWrapper>
    <S.Background source={background} />
    <S.Heading source={heading} />
    <S.BackButton onPress={() => Navigation.pop(props.componentId)}>
      <S.BackButtonIcon source={arrowIcon} />
    </S.BackButton>
  </S.BackgroundWrapper>
);

export default Heading;
