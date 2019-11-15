import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goToScreen } from '@helpers';
import { keepCredentials, requestSendCode } from '@redux/modules/auth';
import PrimaryButton from '@components/PrimaryButton';
import Heading from '@components/Heading';
import Input from '@components/Input';
import Loader from '@components/Loader';
import DismissKeyboardHOC from '@components/HOC/DismissKeyboardHOC';

import http from '@services/http';
import { regExps, errors } from '@configs/validate';
import { inputsConfig } from './config';
import * as S from './styled';

const DismissView = DismissKeyboardHOC(S.Container);
class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    fieldErrors: {},
    refs: [],
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.redirect && nextProps.redirect) {
      goToScreen(this.props, 'CodeConfirmation');
    }
  }

  onSubmit = async () => {
    const {
      password,
      confirmPassword,
      email,
    } = this.state;
    const arr = Object.keys(regExps).map((field) => {
      if (!this.state[field]) {
        this.setFieldError(field, 'Обязательное поле');
        return Promise.resolve(true);
      } else if (!regExps[field].test(this.state[field].toLowerCase()) && field !== 'confirmPassword') {
        this.setFieldError(field, errors[field]);
        return Promise.resolve(true);
      } else if (field === 'email') {
        return http.get(`authentication/emailExists?email=${encodeURIComponent(email)}`).then(({ data: isEmailExists }) => {
          if (isEmailExists) {
            this.setFieldError(field, 'Данный e-mail уже используется');
            return true;
          }
        });
      }
    });
    if (confirmPassword !== password) {
      this.setFieldError('confirmPassword', 'Пароли не совпадают');
      arr.push(Promise.resolve(true));
    }
    const errorArr = await Promise.all(arr);
    const isValid = errorArr.includes(true);

    if (!isValid) {
      this.props.keepCredentials(this.state);
      this.props.requestSendCode(this.state.phoneNumber);
    }
  };

  setFieldError = (field, errorValue) => this.setState(prevState => ({
    fieldErrors: {
      ...prevState.fieldErrors,
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
    const { fieldErrors } = this.state;
    const { loading } = this.props;
    return (
      <DismissView>
        {loading && <Loader />}
        <Heading props={this.props} />
        <S.InputContainer>
          <S.Title>Регистрация</S.Title>
          {inputsConfig.map((input) => {
            const {
              field,
              secureTextEntry,
              placeholder,
              keyboardType,
              maxLength,
            } = input;
            return (
              <Input
                key={field}
                field={field}
                screenType="SignUp"
                maxLength={maxLength}
                keyboardType={keyboardType}
                fieldRef={this[field]}
                focusOnField={this.focusOnField}
                onInputChange={this.handleInputChange}
                placeholder={placeholder}
                refName={`${field}Ref`}
                registerInputRef={this.registerInputRef}
                returnKeyType="next"
                value={this.state[field]}
                secureTextEntry={secureTextEntry}
                errors={fieldErrors}
                setFieldError={this.setFieldError}
              />
            );
          })}
        </S.InputContainer>
        <PrimaryButton title="ПОДТВЕРДИТЬ" onPress={this.onSubmit} isRevertColor />
      </DismissView>
    );
  }
}

SignUp.defaultProps = {
  redirect: false,
};

SignUp.propTypes = {
  keepCredentials: PropTypes.func.isRequired,
  requestSendCode: PropTypes.func.isRequired,
  redirect: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = ({ auth }) => ({
  redirect: auth.redirect,
  loading: auth.loading,
});

const mapDispatchToProps = {
  keepCredentials,
  requestSendCode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
