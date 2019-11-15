import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { NetworkProvider } from './NetworkProvider';
import theme from './theme';

const style = {
  safe: {
    flex: 1,
  },
  view: {
    flex: 1,
    fontFamily: 'Open Sans',
  },
};

if (Platform.OS === 'ios') {
  style.safe.backgroundColor = 'white';
  style.view.backgroundColor = 'white';
}

const CombinedProvider = ({ children, store }) => {
  console.log('store', store.getState());
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NetworkProvider>
          {/* <SafeAreaView style={style.safe}>
            <View style={style.view}>
              {children}
            </View>
          </SafeAreaView> */}
          {store.getState().ui.isHaveSafeArea ?
            <SafeAreaView style={style.safe}>
              <View style={style.view}>
                {children}
              </View>
            </SafeAreaView> :
            <View style={style.view}>
              {children}
            </View>
          }
        </NetworkProvider>
      </ThemeProvider>
    </Provider>
  );
};

CombinedProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.any.isRequired,
};

export default CombinedProvider;
