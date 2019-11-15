import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const InputBlock = ({ value, touched, error }) => (
  <S.Block error={error} touched={touched}>
    <S.Number touched={touched}>{value}</S.Number>
  </S.Block>
);

InputBlock.propTypes = {
  value: PropTypes.number.isRequired,
  touched: PropTypes.bool,
};

InputBlock.defaultProps = {
  touched: false,
};

export default InputBlock;
