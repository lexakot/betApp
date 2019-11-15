import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const LinkButton = ({ title, onPress, color }) => (
  <S.Container onPress={onPress} color={color}>
    <S.Title color={color}>{title}</S.Title>
  </S.Container>
);

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
};

LinkButton.defaultProps = {
  color: 'black',
};

export default LinkButton;
