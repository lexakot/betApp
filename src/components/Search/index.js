import React, { Component } from 'react';
import { Keyboard, Animated } from 'react-native';

import { animatedTimingTransform } from '@helpers';
import searchIcon from '@images/searchIcon.png';

import * as S from './styled';

const ACancelButton = Animated.createAnimatedComponent(S.CancelButton);
const AInput = Animated.createAnimatedComponent(S.Input);

class Search extends Component {
  state = {
    ARight: new Animated.Value(-200),
    AInputWidth: new Animated.Value(100),
  }

  show = () => {
    this.props.onSearchPress();
    animatedTimingTransform(this.state.ARight, 0, 300);
    animatedTimingTransform(this.state.AInputWidth, 80, 300);
  }

  hide = () => {
    Keyboard.dismiss();
    this.props.onHidePress();
    animatedTimingTransform(this.state.ARight, -50, 300);
    animatedTimingTransform(this.state.AInputWidth, 100, 300);
  };

  render() {
    const { showSearchModal } = this.props;
    const { ARight, AInputWidth } = this.state;
    return (
      <S.Container>
        <AInput
          style={{ width: AInputWidth.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '1%'],
        }) }}
          placeholder="Поиск. Например, “маникюр”"
          showSearchModal={showSearchModal}
          onFocus={this.show}
        />
        <ACancelButton style={{ right: ARight }} showSearchModal={showSearchModal} onPress={this.hide}>
          <S.CancelText>Отменить</S.CancelText>
        </ACancelButton>
      </S.Container>
    );
  }
}
export default Search;

//   <S.PlaceHolder>Поиск. Например, “маникюр”</S.PlaceHolder>
//   <S.SearchIcon source={searchIcon} />
// </S.SearchContainer>
