import { Animated } from 'react-native';

export const animatedTimingTransform = (option, toValue, duration) => (
  Animated.timing(
    option,
    {
      toValue,
      duration,
    },
  ).start()
);

export const fu = () => {};
