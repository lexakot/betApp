import React from 'react';
import * as S from './styled';

const CategoriesBar = ({ categories, selectCategory }) => (
  <S.Container>
    <S.StyledScrollView horizontal >
      {categories.map((category, index) =>
      (<S.Tag key={category.id} picked={category.picked} onPress={() => selectCategory(index)}>
        <S.TagText picked={category.picked}>{category.name}</S.TagText>
      </S.Tag>))}
    </S.StyledScrollView>
  </S.Container>
);

export default CategoriesBar;
