/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import {decode, encode} from 'base-64';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/es';
import 'intl/locale-data/jsonp/id';

import App from './src/App';
import {name as appName} from './app.json';

// if (!global.btoa) {
//   global.btoa = encode;
// }

// if (!global.atob) {
//   global.atob = decode;
// }

AppRegistry.registerComponent(appName, () => App);
