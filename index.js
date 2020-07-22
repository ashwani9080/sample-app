/**
 * @format
 */
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {NavigationContainer} from '@react-navigation/native';

import App from './src/App';
import {name as appName} from './app.json';
import store from '@store/store';
import {getLocale, getMessages} from '@utils/commonFunctions';

const locale = getLocale();
const messages = getMessages();

const renderApp = () => (
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </IntlProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => renderApp);
