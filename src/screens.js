import { Navigation } from 'react-native-navigation';

import App from './screens/App';
import Main from './screens/Main';
import Drawer from './screens/Drawer';
import SignUp from './screens/SignUp';
import CodeConfirmation from './screens/CodeConfirmation';
import SignIn from './screens/SignIn';
import ServiceDetails from './screens/ServiceDetails';
import Profile from './screens/Profile';

import BetMain from './screens/BetMain';
import BetCategory from './screens/BetCategory';
import BetApp from './screens/BetApp';
import TopBar from './components/TopBar';


const registerScreens = (store, Provider) => {
  Navigation.registerComponentWithRedux('App', () => App, Provider, store);
  Navigation.registerComponentWithRedux('Main', () => Main, Provider, store);
  Navigation.registerComponentWithRedux('Drawer', () => Drawer, Provider, store);
  Navigation.registerComponentWithRedux('SignUp', () => SignUp, Provider, store);
  Navigation.registerComponentWithRedux('SignIn', () => SignIn, Provider, store);
  Navigation.registerComponentWithRedux('ServiceDetails', () => ServiceDetails, Provider, store);
  Navigation.registerComponentWithRedux('CodeConfirmation', () => CodeConfirmation, Provider, store);
  Navigation.registerComponentWithRedux('Profile', () => Profile, Provider, store);
  
  Navigation.registerComponentWithRedux('BetMain', () => BetMain, Provider, store);
  Navigation.registerComponentWithRedux('BetCategory', () => BetCategory, Provider, store);
  Navigation.registerComponentWithRedux('BetApp', () => BetApp, Provider, store);
 // Navigation.registerComponentWithRedux('TopBar', () => TopBar, Provider, store);
};

export default registerScreens;
