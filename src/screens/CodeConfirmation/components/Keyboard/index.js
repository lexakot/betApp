import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const numbers = [
  {
    rowNumber: 1,
    values: [1, 2, 3],
  },
  {
    rowNumber: 2,
    values: [4, 5, 6],
  },
  {
    rowNumber: 3,
    values: [7, 8, 9],
  },
  {
    rowNumber: 4,
    values: [0],
  },
];

const Keyboard = ({ onPress, disabled }) => (
  <S.Container disabled={disabled}>
    {numbers.map(row => (
      <S.Row key={row.rowNumber}>
        {row.values.map(number => (
          <S.Number disabled={disabled} key={number} onPress={() => onPress(number)}>
            <S.NumberValue>{number}</S.NumberValue>
          </S.Number>
        ))}
      </S.Row>
    ))}
  </S.Container>
);

Keyboard.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Keyboard.defaultProps = {
  disabled: false,
};

export default Keyboard;
