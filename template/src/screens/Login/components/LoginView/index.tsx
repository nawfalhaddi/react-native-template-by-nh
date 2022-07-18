import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface LoginViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.LoginScreen> {}

export default function LoginView({navigation}: LoginViewProps) {
  return (
    <View style={styles.rootView}>
      <Text>Login View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
