import { put, takeEvery } from 'redux-saga/effects';

const SET_SAFE_AREA_REQUEST = 'ui/SET_SAFE_AREA_REQUEST';
const SET_SAFE_AREA = 'ui/SET_SAFE_AREA';


export const initialState = {
  isHaveSafeArea: true,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SAFE_AREA:
      return { ...state, isHaveSafeArea: action.payload };
    default:
      return state;
  }
}

// <<<ACTIONS>>>
export const setSafeAreaRequest = isHaveSafeArea => ({ type: SET_SAFE_AREA, payload: isHaveSafeArea });

// <<<WORKERS>>>
function* setSafeArea({ payload }) {
  try {
    yield put({ type: SET_SAFE_AREA, payload });
  } catch (err) {
    console.error(err);
  }
}

// <<<WATCHERS>>>
export function* watchSetSafeArea() {
  yield takeEvery(SET_SAFE_AREA_REQUEST, setSafeArea);
}

