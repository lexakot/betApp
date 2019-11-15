import React from 'react';

import * as S from './styled';

const Input = props => (
  <S.Input
    value={props.value}
    onChangeText={(text) => props.onChange(text)}
  />
);

export default Input;
