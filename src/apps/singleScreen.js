import { Navigation } from 'react-native-navigation';

export default () => Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        options: {
          topBar: {
            visible: false,
          }
        },
        children: [
          {
            component: {
              name: 'App',
              options: {
                topBar: {
                  drawBehind: true,
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
