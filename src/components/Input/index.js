import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import showPasswordIcon from '@images/showPassword.png';
import hidePasswordIcon from '@images/hidePassword.png';
import { regExps, errors } from '@configs/validate';
import http from '@services/http';

import { animatedTimingTransform } from './helpers';
import { Container, InputArea, Placeholder, ShowPassword, PaswwordIcon, ErrorText, PhoneMask } from './styled';

const APlaceholder = Animated.createAnimatedComponent(Placeholder);
const AInputArea = Animated.createAnimatedComponent(InputArea);

class Input extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    refName: PropTypes.string.isRequired,
    registerInputRef: PropTypes.func.isRequired,
    returnKeyType: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string.isRequired,
    screenType: PropTypes.string.isRequired,
    keyboardType: PropTypes.string,
  }

  static defaultProps = {
    secureTextEntry: false,
    keyboardType: 'default',
  }

  state = {
    showPassword: this.props.secureTextEntry,
    isFocused: false,
    showPhoneMask: false,
    ATop: new Animated.Value(21),
    AFontSize: new Animated.Value(16),
    ABorder: new Animated.Value(1),
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.error !== nextProps.error &&
      this.props.field === 'confirmPassword'
    ) {
      this.setState({ error: 'Пароли не совпадают' });
    }
  }

  validate = (value, field) => {
    this.props.setFieldError(field, null);
    if (!value) {
      this.props.setFieldError(field, 'Обязательное поле');
      return;
    }
    if (regExps[field] && !regExps[field].test(value.toLowerCase()) && field !== 'confirmPassword') {
      this.props.setFieldError(field, errors[field]);
    } else {
      return true;
    }
  };

  togglePasswordShow = () => this.setState({ showPassword: !this.state.showPassword });

  handleInputChange = (text, field) => {
    if (field === 'phoneNumber') {
      this.props.onInputChange(field, text.replace(/[^0-9]/g, ''));
    } else {
      this.props.onInputChange(field, text);
    }
    if (text) {
      this.props.setFieldError(field, null);
    }
  }

  handleInputFocus = () => {
    if (this.props.field === 'phoneNumber') {
      this.setState({ showPhoneMask: true });
    }
    if (this.props.value) {
      animatedTimingTransform(this.state.ABorder, 2, 300);
      return;
    }
    this.setState({ isFocused: true });
    animatedTimingTransform(this.state.ABorder, 2, 300);
    animatedTimingTransform(this.state.ATop, 0, 300);
    animatedTimingTransform(this.state.AFontSize, 12, 300);
  }

  handleInputBlur = () => {
    if (this.props.field === 'phoneNumber' && !this.props.value) {
      this.setState({ showPhoneMask: false });
    }
    if (this.props.value) {
      animatedTimingTransform(this.state.ABorder, 1, 300);
      return;
    }
    this.setState({ isFocused: false });
    animatedTimingTransform(this.state.ABorder, 1, 300);
    animatedTimingTransform(this.state.ATop, 21, 300);
    animatedTimingTransform(this.state.AFontSize, 16, 300);
  };

  render() {
    const {
      field,
      placeholder,
      refName,
      returnKeyType,
      secureTextEntry,
      value,
      keyboardType,
      screenType,
      maxLength,
      errors,
    } = this.props;
    const {
      showPassword,
      isFocused,
      ATop,
      AFontSize,
      ABorder,
      showPhoneMask,
    } = this.state;
    return (
      <Container
        activeOpacity={1}
      >
        <APlaceholder
          style={{ top: ATop, fontSize: AFontSize }}
          isFocused={isFocused}
          error={errors[field]}
        >
          {placeholder}
        </APlaceholder>
        {showPhoneMask && <PhoneMask>+375 </PhoneMask>}
        <AInputArea
          onChangeText={text => this.handleInputChange(text, field)}
          error={errors[field]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          showPhoneMask={showPhoneMask}
          style={{ borderBottomWidth: ABorder }}
          onFocus={this.handleInputFocus}
          onBlur={async () => {
            if (screenType === 'SignUp' &&
                field === 'email' &&
                this.validate(value.toLowerCase(), field)
              ) {
              const { data: isEmailExists } = await http.get(`authentication/emailExists?email=${encodeURIComponent(value)}`);
              if (isEmailExists) {
                // this.setState({ error: 'Данный e-mail уже используется' });
                this.props.setFieldError('email', 'Данный e-mail уже используется');
                this.handleInputBlur();
                return;
              }
            }
            if (screenType === 'SignIn' &&
                field === 'email' &&
                this.validate(value.toLowerCase(), field)
            ) {
              const { data: isEmailExists } = await http.get(`authentication/emailExists?email=${encodeURIComponent(value)}`);
              if (!isEmailExists) {
                this.props.setFieldError('email', 'Данного e-mail не существует');
                this.handleInputBlur();
                return;
              }
            }
            this.validate(value, field);
            this.handleInputBlur();
          }}
          ref={node => this.props.registerInputRef(node, field)}
          value={value}
          underlineColorAndroid="transparent"
          returnKeyType={returnKeyType}
          secureTextEntry={showPassword}
        />
        {secureTextEntry &&
        <ShowPassword
          showPassword={showPassword}
          onPress={this.togglePasswordShow}
        >
          <PaswwordIcon source={showPassword ? showPasswordIcon : hidePasswordIcon} />
        </ShowPassword>}
        <ErrorText>
          {errors[field]}
        </ErrorText>
      </Container>
    );
  }
}

export default Input;
