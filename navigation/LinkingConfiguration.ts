import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'one',
            }
          },
          Notifications: {
            screens: {
              TabTwoScreen: 'two',
            }
          },
          Classes: {
            screens: {
              ClassesScreen: 'three',
            }
          },
          More: {
            screens: {
              MoreScreen: 'four',
              TimetableScreen: 'five',
              AssignmentScreen: 'Six'
            }
          },
        }
      },
      NotFound: '*',
    },
  },
};
