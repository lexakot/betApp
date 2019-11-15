import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { connect } from 'react-redux';

import { requestSignUp, requestResetError, requestSendCode } from '@redux/modules/auth';
import apps from '@apps';
import Loader from '@components/Loader';
import background from '@images/image.png';
import blurBackground from '@images/BlurBg.png';

import InputBlock from './components/InputBlock';
import Keyboard from './components/Keyboard';

import * as S from './styled';

let index = 0;
class CodeConfirmation extends Component {
  state = {
    confirmationCode: {
      1: '-',
      2: '-',
      3: '-',
      4: '-',
    },
    isTimerOn: false,
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.authenticated && nextProps.authenticated) {
      apps.tabBased();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.confirmationError && this.props.confirmationError) {
      index = 0;
      this.setState({
        confirmationCode: {
          1: '-',
          2: '-',
          3: '-',
          4: '-',
        },
      });
      return;
    }
    if (!Object.values(this.state.confirmationCode).some(val => val === '-') &&
        !this.props.loading &&
        !this.props.authenticated) {
      this.onFilled();
    }
  };

  onFilled = () => {
    const code = Object.values(this.state.confirmationCode).join('');
    this.props.requestSignUp(code);
  };

  onKeyboardPress = (value) => {
    if (index === 4) return;
    index += 1;
    this.props.requestResetError();
    this.setState(prevState => ({
      confirmationCode: {
        ...prevState.confirmationCode,
        [index]: value,
      },
    }));
  };

  resendCode = () => {
    this.props.requestSendCode(this.props.credentials.phoneNumber);
    this.props.requestResetError();
    this.setState({ isTimerOn: true });
  }
  render() {
    const { confirmationError, loading, credentials } = this.props;
    const { confirmationCode, isTimerOn } = this.state;
    return (
      <ImageBackground source={background} style={{ flex: 1 }}>
        <ImageBackground source={blurBackground} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* {loading && <Loader />} */}
          <S.Title>Подтверждающий код</S.Title>
          <S.Description>
          Пожалуйста, введите подтверждающий код, отправленный на номер +375{credentials.phoneNumber}
          </S.Description>
          <S.InputContainer error={confirmationError}>
            {Object.keys(confirmationCode).map(key => (
              <InputBlock
                error={confirmationError}
                key={key}
                value={confirmationCode[key]}
                touched={key === `${this.index + 1}`}
              />
            ))}
            {confirmationError !== '' && <S.ErrorText>{confirmationError}</S.ErrorText>}
            {isTimerOn ?
              <CountDown
                until={5}
                onFinish={() => this.setState({ isTimerOn: false })}
                size={10}
                digitTxtStyle={{ color: 'white' }}
                digitStyle={{
                  backgroundColor: 'rgba(252, 252, 252, 0.6)',
                }}
                timeToShow={['M', 'S']}
                timeLabels={{ m: null, s: null }}
                style={{
                  position: 'absolute',
                  bottom: -40,
                }}
              /> :
              <S.ResendButton onPress={this.resendCode}>
                <S.ResendText>Отправить повторно</S.ResendText>
              </S.ResendButton>
            }
          </S.InputContainer>
          <Keyboard
            disabled={loading}
            onPress={this.onKeyboardPress}
          />
        </ImageBackground>
      </ImageBackground>
    );
  }
}
CodeConfirmation.propTypes = {
  confirmationError: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  credentials: PropTypes.object.isRequired,
  requestSendCode: PropTypes.func.isRequired,
  requestResetError: PropTypes.func.isRequired,
  requestSignUp: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateTopProps = ({ auth }) => ({
  authenticated: auth.authenticated,
  confirmationError: auth.confirmationError,
  credentials: auth.credentials,
  loading: auth.loading,
});

const mapDispatchToProps = {
  requestSignUp,
  requestResetError,
  requestSendCode,
};

export default connect(mapStateTopProps, mapDispatchToProps)(CodeConfirmation);
