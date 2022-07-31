import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import {useDispatch, useSelector} from '@store';
import {incrementByAmount} from '@store/counterSlice';
import {Button} from '@ui/components/Button/Button';
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

export interface HomeViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.HomeScreen> {}

export default function HomeView({navigation}: HomeViewProps) {
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{...styles.root}}>
      <Text>{value}</Text>
      <Button
        text="+ Increment"
        onPress={() => {
          dispatch(incrementByAmount(3));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
