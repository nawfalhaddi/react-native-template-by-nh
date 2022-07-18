import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface SignUpViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.SignUpScreen> {}

export default function SignUpView({navigation}: SignUpViewProps) {
  return (
    <View>
      <Text>Sign up View</Text>
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
