import React, { PureComponent } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

export const NetworkContext = React.createContext({ isConnected: true });

export class NetworkProvider extends PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isConnected && !this.state.isConnected) {
      Snackbar.show({
        title: 'Проверьте ваше интернет соединение',
        duration: 2000,
        backgroundColor: 'red',
      });
    }
    if (!prevState.isConnected && this.state.isConnected) {
      Snackbar.show({
        title: 'Интернет соединение восстановлено',
        duration: 2000,
        backgroundColor: 'green',
      });
    }
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  }

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}
