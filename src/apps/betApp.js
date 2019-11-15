import { Navigation } from 'react-native-navigation';

export default () => Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'BetMain',
        options: {
          topBar: {
            visible: false,
            // background: {
            //   component: {
            //     name: 'TopBar',
            //   },
            // },
          },
        },
        children: [
          {
            component: {
              name: 'BetApp',
              options: {
                topBar: {
                  drawBehind: true,
                //  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
