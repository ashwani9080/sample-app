import React, {useEffect, useState, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {IntlProvider} from 'react-intl';

import AppNavigator from '@navigators/AppNavigator';
import AppContext from '@utils/AppContext';
import {getMessages, getLocale} from './utils/commonFunctions';

const messages = getMessages();
const locale = getLocale();

const App = () => {
  const [userToken, setUserToken] = useState(false);

  const context = useMemo(
    () => ({
      userToken,
      setUserToken,
    }),
    [userToken],
  );

  useEffect(() => {
    (async () => {
      SplashScreen.hide();
    })();
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <AppContext.Provider value={context}>
        <AppNavigator />
      </AppContext.Provider>
    </IntlProvider>
  );
};

export default App;
