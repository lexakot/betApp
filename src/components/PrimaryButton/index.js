import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const PrimaryButton = ({ title, onPress, isRevertColor, disabled }) => (
  <S.Container disabled={disabled} onPress={onPress} isRevertColor={isRevertColor}>
    <S.Title isRevertColor={isRevertColor}>{title}</S.Title>
  </S.Container>
);

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isRevertColor: PropTypes.bool,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  isRevertColor: false,
  disabled: false,
};

export default PrimaryButton;
