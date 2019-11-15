import React, { Component } from 'react';

import Search from '@components/Search';
import Card from '@components/Card';
import CategoriesBar from '@components/CategoriesBar';
import SearchModal from '@components/modals/SearchModal';

import { goToScreen } from '@helpers';

import * as S from './styled';

const mockCategories = [
  {
    id: 1,
    name: 'Уход за собой',
    picked: false,
    services: [
      {
        name: 'Опа Маникюр',
        companyName: 'SuperCompany',
        description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ',
      },
      {
        name: 'Домашний Маникюр',
      },
    ],
  },
  {
    id: 2,
    name: 'Не уход за собой',
    picked: false,
    services: [
      {
        name: 'Класс Маникюр',
      },
    ],
  },
  {
    id: 324,
    name: 'Выход из себя',
    picked: false,
    services: [
      {
        name: 'Супер Маникюр',
      },
    ],
  },
  {
    id: 3,
    name: 'Уход за собой',
    picked: false,
    services: [
      {
        name: 'Маникюр',
      },
    ],
  },
  {
    id: 4,
    name: 'Уход за собой',
    picked: false,
    services: [
      {
        name: 'Маникюр',
      },
    ],
  },
];

class Main extends Component {
  state = {
    showSearchModal: false,
    selectedCategory: 0,
  }

  onSearchPress = () => this.setState({ showSearchModal: true })
  onHidePress = () => this.setState({ showSearchModal: false })

  onCardPress = service => goToScreen(this.props, 'ServiceDetails', service);

  selectCategory = (index) => {
    const { selectedCategory } = this.state;
    mockCategories[selectedCategory].picked = false;
    this.setState({ selectedCategory: index });
  }

  render() {
    const { showSearchModal, selectedCategory } = this.state;
    mockCategories[selectedCategory].picked = true;
    return (
      <S.Container>
        <S.Title>ORDER SERVICE</S.Title>
        <Search
          onSearchPress={this.onSearchPress}
          showSearchModal={showSearchModal}
          onHidePress={this.onHidePress}
        />
        {showSearchModal && <SearchModal />}
        <S.CategoriesButton>
          <S.CategoriesButtonText>ВСЕ КАТЕГОРИИ</S.CategoriesButtonText>
        </S.CategoriesButton>
        <S.SubTitle>ПОПУЛЯРНОЕ</S.SubTitle>
        <CategoriesBar categories={mockCategories} selectCategory={this.selectCategory} />
        <S.CardsWrapper>
          {mockCategories[selectedCategory].services.map(service => (
            <Card
              key={service.name}
              onPress={() => this.onCardPress(service)}
              service={service}
              category={mockCategories[selectedCategory]}
            />
          ))}
        </S.CardsWrapper>
      </S.Container>
    );
  }
}

export default Main;
