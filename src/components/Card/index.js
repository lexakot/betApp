import React from 'react';

import mockAvatar from '@images/mockAvatar.png';

import * as S from './styled';

const Actions = [
  {
    id: 1,
    name: '',
    icon: null,
    onPress: () => alert('touched 1'),
  },
  {
    id: 2,
    name: '',
    icon: null,
    onPress: () => alert('touched 2'),
  },
  {
    id: 3,
    name: '',
    icon: null,
    onPress: () => alert('touched 3'),
  },
];
const hitSlopObject = { top: 15, left: 10, bottom: 10, right: 5 };

const Card = ({ onPress, service, category }) => (
  <S.Container onPress={onPress}>
    <S.Avatar source={mockAvatar} />
    <S.InfoContainer>
      <S.CategoryName>{category.name}</S.CategoryName>
      <S.Title>{service.name}</S.Title>
      <S.PriceContainer>
        <S.PriceText>25p</S.PriceText>
      </S.PriceContainer>
    </S.InfoContainer>
    <S.ActionsContainer>
      {Actions.map(action => (
        <S.Action
          key={action.id}
          hitSlop={hitSlopObject}
          onPress={action.onPress}
        />
      ))}
    </S.ActionsContainer>
  </S.Container>
);

export default Card;
