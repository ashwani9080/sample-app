import 'react-native';
// import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

const fetch = require('node-fetch');

global.fetch = fetch;
global.window = global;
global.Headers = fetch.Headers;
global.Request = fetch.Request;
global.Response = fetch.Response;
global.location = {hostname: ''};
global.__fbBatchedBridgeConfig = true;

const originalConsoleError = console.error;

// console.error = (message) => {
//   if (message.startsWith('Warning:')) {
//     return;
//   }
//   originalConsoleError(message);
// };

// jest.mock(
//   '../node_modules/react-native/Libraries/Components/StatusBar/StatusBar',
//   () => 'StatusBar',
// );

jest.mock('@react-native-firebase/messaging', () => {
  return () => ({
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getToken: jest.fn(() => Promise.resolve('myMockToken')),
    onTokenRefresh: jest.fn(() => Promise.resolve('myMockToken')),
    registerAppWithFCM: jest.fn(() => Promise.resolve('myMockToken')),
    registerDeviceForRemoteMessages: jest.fn(() => Promise.resolve(true)),
    setBackgroundMessageHandler: jest.fn(() => Promise.resolve(true)),
    onMessage: jest.fn(() => Promise.resolve('fcm_message')),
    onNotificationOpenedApp: jest.fn(() => Promise.resolve('fcm_message')),
    getInitialNotification: jest.fn(() => Promise.resolve('fcm_message')),
  });
});

// jest.mock('@react-native-community/async-storage', () => {
//   return {
//     getItem: jest.fn(() => Promise.resolve(true)),
//     setItem: jest.fn(() => Promise.resolve(true)),
//   };
// });

// jest.mock('react-native/Libraries/YellowBox/Data/YellowBoxWarning.js');
// jest.mock('react-native/Libraries/YellowBox/YellowBox.js');

// jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-native-splash-screen', () => {
  return {
    show: jest.fn().mockImplementation(() => {
      console.log('show splash screen');
    }),
    hide: jest.fn().mockImplementation(() => {
      console.log('hide splash screen');
    }),
  };
});
