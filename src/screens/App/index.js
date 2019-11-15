import React from 'react';
import { ImageBackground } from 'react-native';

import { goToScreen } from '@helpers';
import SecondaryButton from '@components/SecondaryButton';

import googleIcon from '@images/googleIcon.png';
import facebookIcon from '@images/facebookIcon.png';
import background from '@images/image.png';
import blurBackground from '@images/BlurBg.png';
import heading from '@images/headingRow.png';

import Separator from './components/Separator';

import { description } from './config';

import * as S from './styled';


const App = props => (
  <>
    <ImageBackground source={background} style={{ flex: 1 }}>
      <ImageBackground source={blurBackground} style={{ flex: 1 }} >
        <S.Container>
          <S.Heading source={heading} />
          <S.Description>{description}</S.Description>
          <SecondaryButton title="ВХОД" onPress={() => goToScreen(props, 'SignIn')} />
          <SecondaryButton title="РЕГИСТРАЦИЯ" onPress={() => goToScreen(props, 'SignUp')} />
          <Separator />
          <S.SocialWrapper>
            <S.SocialIcon source={googleIcon} />
            <S.SocialIcon source={facebookIcon} />
          </S.SocialWrapper>
        </S.Container>
        <S.PerformerButton>
          <S.Title>стать исполнителем</S.Title>
        </S.PerformerButton>
      </ImageBackground>
    </ImageBackground>
  </>
);

export default App;
