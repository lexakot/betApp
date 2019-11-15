import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Separator = () => (
  <S.Container>
    <S.SeparatorPart />
    <S.Title>войти с помощью:</S.Title>
    <S.SeparatorPart />
  </S.Container>
);

export default Separator;
