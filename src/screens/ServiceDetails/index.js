import React from 'react';
import Swiper from 'react-native-swiper';

import BackButton from '@components/BackButton';
import mockServiceImage from '@images/mockServiceImage.png';
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
];

const ServiceDetails = props => (
  <S.Container>
    <BackButton props={props} />
    <S.BackgroundWrapper>
      <Swiper paginationStyle={{ marginBottom: 20 }} dotColor="#C4C4C4" activeDotColor="white">
        <S.BackgroundImage source={mockServiceImage} />
        <S.BackgroundImage source={mockServiceImage} />
        <S.BackgroundImage source={mockServiceImage} />
        <S.BackgroundImage source={mockServiceImage} />
      </Swiper>
    </S.BackgroundWrapper>
    <S.DetailsContainer>
      <S.ServiceTitle>{props.name}</S.ServiceTitle>
      <S.DetailsActionsWrapper>
        <S.CompanyName>{props.companyName}</S.CompanyName>
        <S.PriceContainer>
          <S.PriceText>25p</S.PriceText>
        </S.PriceContainer>
      </S.DetailsActionsWrapper>
      <S.Description>{props.description}</S.Description>
      <S.ActionsContainer>
        {Actions.map(action => (
          <S.Action
            onPress={action.onPress}
          />
        ))}
      </S.ActionsContainer>
    </S.DetailsContainer>
  </S.Container>
);

export default ServiceDetails;
