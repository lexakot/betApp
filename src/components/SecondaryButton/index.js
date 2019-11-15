import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const SecondaryButton = ({ title, onPress }) => (
  <S.Container onPress={onPress}>
    <S.Title>{title}</S.Title>
  </S.Container>
);

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default SecondaryButton;
