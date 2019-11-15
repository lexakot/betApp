import { Navigation } from 'react-native-navigation';


export default () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'Drawer',
          },
        },
        center: {
          bottomTabs: {
            options: {
              bottomTabs: {
                backgroundColor: 'blue',
              },
            },
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'Main',
                  },
                }],
                options: {
                  bottomTab: {
                    icon: require('../images/Main.png'),
                    testID: 'Main',
                  },
                  topBar: {
                    drawBehind: true,
                    visible: false,
                  },
                },
              },
            }],
          },
        },
      },
    },
  });
};
