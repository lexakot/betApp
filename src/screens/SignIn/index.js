import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import apps from '@apps';
import { goToScreen } from '@helpers';
import { requestSignIn } from '@redux/modules/auth';
import PrimaryButton from '@components/PrimaryButton';
import Heading from '@components/Heading';
import Input from '@components/Input';
import DismissKeyboardHOC from '@components/HOC/DismissKeyboardHOC';

import { inputsConfig } from './config';
import * as S from './styled';

const DismissView = DismissKeyboardHOC(S.Container);

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.authenticated && nextProps.authenticated) {
      apps.tabBased();
    }
    if (!this.props.signinError && nextProps.signinError) {
      this.setState(prevState => ({
        ...prevState,
        errors: {
          password: nextProps.signinError,
        },
      }));
    }
  }

  onSubmit = () => {
    const { email, password } = this.state;
    const credentials = {
      UserName: email,
      Password: password,
    };
    if (email && password) {
      this.props.requestSignIn(credentials);
    } else {
      ['email', 'password'].forEach((field) => {
        if (!this.state[field]) {
          this.setFieldError(field, 'Обязательное поле');
        }
      });
    }
  };

  setFieldError = (field, errorValue) => this.setState(prevState => ({
    errors: {
      ...prevState.errors,
      [field]: errorValue,
    },
  }));

  handleInputChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  registerInputRef = (ref, field) => {
    this[field] = ref;
  };

  render() {
    const { errors } = this.state;
    return (
      <DismissView>
        <Heading props={this.props} />
        <S.InputContainer>
          <S.Title>Вход</S.Title>
          {inputsConfig.map((input) => {
            const { field, secureTextEntry, placeholder } = input;
            return (
              <Input
                key={field}
                field={field}
                errors={errors}
                screenType="SignIn"
                setFieldError={this.setFieldError}
                fieldRef={this[field]}
                focusOnField={this.focusOnField}
                onInputChange={this.handleInputChange}
                placeholder={placeholder}
                refName={`${field}Ref`}
                registerInputRef={this.registerInputRef}
                returnKeyType="next"
                value={this.state[field]}
                secureTextEntry={secureTextEntry}
              />
            );
          })}
        </S.InputContainer>
        <PrimaryButton title="ВОЙТИ" onPress={this.onSubmit} isRevertColor />
        <S.ForgotPasswordLink>
          <S.ForgotPasswordText>Забыли пароль?</S.ForgotPasswordText>
        </S.ForgotPasswordLink>
        <S.CreateAccountWrapper>
          <S.HintText>
            Еще не зарегистрированы?
          </S.HintText>
          <S.CreateAccountLink onPress={() => goToScreen(this.props, 'SignUp')}>
            <S.CreateAccountText> Cоздать аккаунт</S.CreateAccountText>
          </S.CreateAccountLink>
        </S.CreateAccountWrapper>
      </DismissView>
    );
  }
}

SignIn.defaultProps = {
  signinError: '',
};

SignIn.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signinError: PropTypes.string,
  requestSignIn: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
  signinError: auth.signinError,
});

const mapDispatchToProps = {
  requestSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
