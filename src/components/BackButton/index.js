import React from 'react';
import { Navigation } from 'react-native-navigation';

import arrowIcon from '@images/arrowIcon.png';

import * as S from './styled';
// REFACTOR
const BackButton = ({ props }) => (
  <S.BackButton onPress={() => Navigation.pop(props.componentId)}>
    <S.BackButtonIcon source={arrowIcon} />
  </S.BackButton>
);

export default BackButton;
