import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <></>;
};
