import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'Order Service',
  })
  .useReactNative()
  .connect();
