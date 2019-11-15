import { all, fork } from 'redux-saga/effects';

import * as authWatchers from './modules/auth';
import * as uiWatchers from './modules/ui';
import * as betWatchers from './modules/bet';

export default function* root() {
  yield all([
    fork(authWatchers.watchSignUp),
    fork(authWatchers.watchSendCode),
    fork(authWatchers.watchLogout),
    fork(authWatchers.watchSignIn),
    fork(uiWatchers.watchSetSafeArea),
    fork(betWatchers.watchGetCategories),
    fork(betWatchers.watchGetBets),
    fork(betWatchers.watchGetBonuses),
    fork(betWatchers.watchLikeBet),
    fork(betWatchers.watchClickLink),
  ]);
}
