import React from 'react';
import { connect } from 'react-redux';

import bonusIcon from '@images/bonusIcon.png';
import { setCategory, openBonusCategory, getBetsRequest } from '@redux/modules/bet';

import * as S from './styled';

const source = 'http://api-taptobet.somee.com/';

const TopBar = (props) => {
  const { categories } = props;

  const onCategoryPress = (category) => {
    props.setCategory(category);
    props.getBetsRequest(category.id);
  };

  return (
    <S.Container>
      <S.PopularButton isSelected={props.isBonusOpen} onPress={() => props.openBonusCategory()}>
        <S.PopularIcon source={bonusIcon} />
      </S.PopularButton>
      <S.Separator />
      <S.StyledCrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <S.CategoryButton isSelected={props.category && (props.category.title === category.title)} onPress={() => onCategoryPress(category)}>
            <S.CategoryIcon source={{ uri: `${source}${category.iconPath}` }} />
          </S.CategoryButton>
        ))}
        <S.BlankView />
      </S.StyledCrollView>
    </S.Container>
  );
}

// export default TopBar;

const mapStateToProps = ({ bet }) => ({
  category: bet.category,
  isBonusOpen: bet.isBonusOpen,
  categories: bet.categories,
});

const mapDispatchToProps = {
  setCategory,
  openBonusCategory,
  getBetsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
