import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import {useDispatch, useSelector} from '@store';
import {incrementByAmount} from '@store/counterSlice';
import {Button} from '@ui/components/Button/Button';
import {styled} from '@ui/theme/styled-components';
import React from 'react';
import {Text, View} from 'react-native';

export interface HomeViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.HomeScreen> {}

export default function HomeView({navigation}: HomeViewProps) {
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <Root>
      <Text>This button is an implementation for redux</Text>
      <Text> Value: {value}</Text>
      <Button
        text="+ Increment"
        onPress={() => {
          dispatch(incrementByAmount(1));
        }}
      />
    </Root>
  );
}

const Root = styled(View)(({theme: {spacingValues}}) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: spacingValues.vLg,
}));
