import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashscreen/splashscreen';
import Login from '../screens/auth/login/login';
import Signup from '../screens/auth/signup/signup';

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  Signup: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Signup" component={Signup} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
