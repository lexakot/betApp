import { Navigation } from 'react-native-navigation';

import { initialState as authInitialState } from './redux/modules/auth';
import { initialState as uiInitialState } from './redux/modules/ui';
import TokenStorage from './services/storage/token';
import UserStorage from './services/storage/user';
import registerScreens from './screens';
import CombinedProvider from './CombinedProvider';
import configureStore from './redux/configureStore';
import './configs/ReactotronConfig';

import apps from './apps';
// TODO: Android Troubles
export default async () => {
  const [token, user] = await Promise.all([
    TokenStorage.get(),
    UserStorage.get(),
  ]);
  const authenticated = !!token && !!user;

  const persistedState = {
    auth: {
      ...authInitialState,
      authenticated,
      user: user || {},
    },
    ui: {
      ...uiInitialState,
      isHaveSafeArea: true,
    },
  };
  const store = configureStore(persistedState);
  registerScreens(store, CombinedProvider);

  // if (!authenticated) { //mocked
  //   return Navigation.events().registerAppLaunchedListener(() => apps.tabBased());
  // }

  // return apps.singleScreen();
  
  return apps.betApp();
};
