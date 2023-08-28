import React from 'react';
import {View, Text, Button} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SplashScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        title="Login"
      />
      <Text />
      <Button
        onPress={() => {
          navigation.navigate('Signup');
        }}
        title="Signup"
      />
    </View>
  );
};

export default SplashScreen;
