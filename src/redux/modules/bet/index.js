import http from '@services/http';

import { NativeModules } from 'react-native';
import { put, takeEvery, call } from 'redux-saga/effects';

const SET_CATEGORY = 'bet/SET_CATEGORY';

const GET_CATEGORIES_REQUEST = 'bet/GET_CATEGORIES_REQUEST';
const GET_CATEGORIES_SUCCESS = 'bet/GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAILURE = 'bet/GET_CATEGORIES_FAILURE';

const GET_BETS_REQUEST = 'bet/GET_BETS_REQUEST';
const GET_BETS_SUCCESS = 'bet/GET_BETS_SUCCESS';
const GET_BETS_FAILURE = 'bet/GET_BETS_FAILURE';

const GET_BONUSES_REQUEST = 'bet/GET_BONUSES_REQUEST';
const GET_BONUSES_SUCCESS = 'bet/GET_BONUSES_SUCCESS';
const GET_BONUSES_FAILURE = 'bet/GET_BONUSES_FAILURE';

const OPEN_BONUS = 'bet/OPEN_BONUS';

const LIKE_BET_REQUEST = 'bet/LIKE_BET_REQUEST';
const LIKE_BET_SUCCESS = 'bet/LIKE_BET_SUCCESS';

const CLIKC_LINK_REQUEST = 'bet/CLIKC_LINK_REQUEST';
const CLIKC_LINK_SUCCESS = 'bet/CLIKC_LINK_SUCCESS';

const initialState = {
  categories: [],
  category: null,
  isBonusOpen: true,
  bets: [],
  loading: false,
  bonuses: [],
  loadingBonuses: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload, isBonusOpen: false };
    case GET_CATEGORIES_SUCCESS: {
      return { ...state, categories: action.payload };
    }
    case GET_BETS_REQUEST:
      return { ...state, loading: true };
    case GET_BETS_SUCCESS:
      return { ...state, bets: action.payload, loading: false };
    case OPEN_BONUS:
      return { ...state, category: null, isBonusOpen: true };
    
    case GET_BONUSES_REQUEST:
      return { ...state, loadingBonuses: true };
    case GET_BONUSES_SUCCESS:
      return { ...state, bonuses: action.payload, loadingBonuses: false };
    default:
      return state;
  }
}

// <<<ACTIONS>>>
export const setCategory = category => ({ type: SET_CATEGORY, payload: category });
export const openBonusCategory = () => ({ type: OPEN_BONUS });
export const getCategoriesRequest = () => ({ type: GET_CATEGORIES_REQUEST });
export const getBetsRequest = id => ({ type: GET_BETS_REQUEST, payload: id });
export const getBonusesRequest = () => ({ type: GET_BONUSES_REQUEST });
export const likeBetRequest = (betId, flag) => ({ type: LIKE_BET_REQUEST, payload: betId, flag });
export const clickLinkRequest = linkId => ({ type: CLIKC_LINK_REQUEST, linkId });

// <<<WORKERS>>>
function* getCategories() {
  try {
    const lang = NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2);
    const { data } = yield call(http.get, `Mobile/Category/GetAll?culture=${lang}`);
    yield put({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
  }
}

function* getBets({ payload }) {
  try {
    const lang = NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2);
    const { data } = yield call(http.get, `Mobile/Bet/GetAll/${payload}?culture=${lang}`);
    yield put({ type: GET_BETS_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
  }
}

function* getBonuses() {
  try {
    const lang = NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2);
    const { data } = yield call(http.get, `Mobile/Bonus/GetAll?culture=${lang}`);
    yield put({ type: GET_BONUSES_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
  }
}

function* likeBet({ payload, flag }) {
  try {
    yield call(http.post, `Mobile/Bet/${payload}/Like/${flag}`);
    yield put({ type: LIKE_BET_SUCCESS });
  } catch (err) {
    console.error(err);
  }
}

function* clickLink({ linkId }) {
  try {
    yield call(http.post, `Mobile/LinkClick/${linkId}`);
    yield put({ type: CLIKC_LINK_SUCCESS });
  } catch (err) {
    console.error(err);
  }
}
// <<<WATCHERS>>>
export function* watchGetCategories() {
  yield takeEvery(GET_CATEGORIES_REQUEST, getCategories);
}

export function* watchGetBets() {
  yield takeEvery(GET_BETS_REQUEST, getBets);
}

export function* watchGetBonuses() {
  yield takeEvery(GET_BONUSES_REQUEST, getBonuses);
}

export function* watchLikeBet() {
  yield takeEvery(LIKE_BET_REQUEST, likeBet);
}

export function* watchClickLink() {
  yield takeEvery(CLIKC_LINK_REQUEST, clickLink);
}
