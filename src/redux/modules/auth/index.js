import { call, put, takeEvery, select } from 'redux-saga/effects';
import http from '@services/http';
import TokenStorage from '@services/storage/token';
import UserStorage from '@services/storage/user';

import { formCredentials } from './helpers';

const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

const SIGNIN_REQUEST = 'auth/SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'auth/SIGNIN_FAILURE';

const KEEP_CREDENTIALS = 'auth/KEEP_CREDENTIALS';

const SEND_CODE_REQUEST = 'auth/SEND_CODE_REQUEST';
const SEND_CODE_SUCCESS = 'auth/SEND_CODE_SUCCESS';
const SEND_CODE_FAILURE = 'auth/SEND_CODE_FAILURE';

const RESET_ERROR = 'auth/RESET_ERROR';

const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';


export const initialState = {
  loading: false,
  authenticated: false,
  signupError: '',
  signinError: '',
  confirmationError: '',
  user: {},
  credentials: {},
  redirect: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return {
        ...state, authenticated: true, loading: false, user: action.payload,
      };
    case SIGNUP_FAILURE:
      return { ...state, loading: false, confirmationError: action.payload };

    case SIGNIN_REQUEST:
      return { ...state, loading: true };
    case SIGNIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, authenticated: true };
    case SIGNIN_FAILURE:
      return { ...state, loading: false, signinError: action.payload };

    case KEEP_CREDENTIALS:
      return { ...state, credentials: action.payload };

    case SEND_CODE_REQUEST:
      return { ...state, loading: true };
    case SEND_CODE_SUCCESS:
      return formCredentials(state, 'ConfirmationId', action.payload);
    case SEND_CODE_FAILURE:
      return { ...initialState, signupError: action.payload };

    case LOGOUT_REQUEST:
      return { ...initialState, loading: true };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    case LOGOUT_FAILURE:
      return { ...initialState };

    case RESET_ERROR:
      return { ...state, confirmationError: '' };
    default:
      return state;
  }
}

// <<<ACTIONS>>>
export const requestSignUp = credentials => ({ type: SIGNUP_REQUEST, payload: credentials });
export const keepCredentials = credentials => ({ type: KEEP_CREDENTIALS, payload: credentials });
export const requestSendCode = phoneNumber => ({ type: SEND_CODE_REQUEST, payload: phoneNumber });
export const requestLogout = () => ({ type: LOGOUT_REQUEST });
export const requestSignIn = credentials => ({ type: SIGNIN_REQUEST, payload: credentials });
export const requestResetError = () => ({ type: RESET_ERROR });

// <<<WORKERS>>>
function* signUp({ payload }) {
  try {
    const credentials = yield select(state => state.auth.credentials);
    const params = {
      ...credentials,
      ConfirmationCode: payload,
    };
    yield call(http.post, '/register', params);
    const response = yield call(http.post, '/token', {
      userName: credentials.email,
      password: credentials.password,
    });
    const user = {
      email: credentials.email,
      lastName: credentials.lastName,
      firstName: credentials.firstName,
      phoneNumber: credentials.phoneNumber,
    };

    yield call(TokenStorage.save, response.data);
    yield call(UserStorage.save, user);
    yield put({ type: SIGNUP_SUCCESS, payload: user });
  } catch (err) {
    yield put({ type: SIGNUP_FAILURE, payload: 'Введите код снова' });
  }
}

function* signIn({ payload }) {
  try {
    console.log(payload);
    const { data } = yield call(http.post, '/token', payload);
    const user = {
      email: payload.email,
    };
    yield call(TokenStorage.save, data);
    // yield call(UserStorage.save, mockUser);
    yield put({ type: SIGNIN_SUCCESS, payload: user });
  } catch (err) {
    yield put({ type: SIGNIN_FAILURE, payload: 'Неправильный пароль' });
  }
}

function* sendCode({ payload }) {
  try {
    // const mockPayload = '292605653';
    const phoneNumber = encodeURIComponent(`+375${payload}`);
    const { data } = yield call(http.get, `/smscode?phoneNumber=${phoneNumber}`);
    yield put({ type: SEND_CODE_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: SEND_CODE_FAILURE, payload: err });
  }
}

function* logout() {
  try {
    yield call(TokenStorage.delete);
    yield call(UserStorage.delete);
  } catch (err) {
    yield put({ type: LOGOUT_FAILURE });
  }
}
// <<<WATCHERS>>>
export function* watchSignUp() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
}

export function* watchSendCode() {
  yield takeEvery(SEND_CODE_REQUEST, sendCode);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

export function* watchSignIn() {
  yield takeEvery(SIGNIN_REQUEST, signIn);
}
