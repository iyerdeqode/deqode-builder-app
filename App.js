/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar barStyle={'light-content'} />
    </NavigationContainer>
  );
};

export default App;
