import React, {useState, useCallback, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {useIntl} from 'react-intl';
import {TextInput} from 'react-native-paper';
import {BorderlessButton as Button} from 'react-native-gesture-handler';

import AppContext from '@utils/AppContext';
import Colors from '../utils/Colors';

const {height: screenHeight} = Dimensions.get('window');

const Login = () => {
  const {formatMessage, locale} = useIntl();
  const {setUserToken, userToken} = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (username === 'username' && password === '12345') {
      setUserToken(true);
    }
  };

  return (
    <SafeAreaView testID="loginScreen" style={styles.container}>
      <View style={styles.header}></View>
      <TextInput
        testID="username"
        label={'username'}
        mode="outlined"
        placeholder={'username'}
        value={username}
        onChangeText={(input) => {
          setUsernameError(false);
          setInvalidLogin(false);
          setUsername(input);
        }}
        theme={{colors: {primary: Colors.raw['dark-slate-blue']}}}
        error={usernameError || invalidLogin}
      />

      <TextInput
        testID="password"
        label={formatMessage({id: 'login.password'})}
        mode="outlined"
        placeholder={formatMessage({id: 'login.password'})}
        value={password}
        onChangeText={(input) => {
          setPasswordError(false);
          setInvalidLogin(false);
          setPassword(input);
        }}
        theme={{
          colors: {primary: Colors.raw['dark-slate-blue']},
        }}
        error={passwordError || invalidLogin}
        secureTextEntry={true}
      />

      <Button
        testID="loginButton"
        borderless={true}
        rippleColor={Colors.raw.white}
        style={styles.btn}
        onPress={handleLogin}>
        <Text style={[styles.btnText]}>Login Button</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.raw.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: screenHeight * 0.12,
    paddingBottom: screenHeight * 0.08,
  },
  error: {
    fontSize: 12,
    marginLeft: 14,
    marginBottom: 5,
    color: Colors.raw.scarlet,
  },
  btn: {
    marginTop: 5,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Colors.raw.leaf,
  },
  btnText: {
    color: Colors.raw.white,
  },
  forgetButton: {
    alignSelf: 'center',
    marginTop: screenHeight * 0.066,
  },
  forgetText: {
    color: Colors.raw.black60,
  },
});

export default Login;
