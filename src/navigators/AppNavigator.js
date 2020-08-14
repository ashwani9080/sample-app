import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Login, Home} from '../screens';
import AppContext from '../utils/AppContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {userToken} = useContext(AppContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {!userToken ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <Stack.Screen name="Home" component={Home} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
