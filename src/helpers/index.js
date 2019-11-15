import { Navigation } from 'react-native-navigation';
import { Animated } from 'react-native';

export const goToScreen = (props, screenName, passProps) => {
  Navigation.push(props.componentId, {
    component: {
      name: screenName,
      passProps,
      // options: {
      //   topBar: {
      //     title: {
      //       text: screenName,
      //     },
      //   },
      // },
    },
  });
};

export const animatedTimingTransform = (option, toValue, duration) => (
  Animated.timing(
    option,
    {
      toValue,
      duration,
    },
  ).start()
);

export default () => {};
