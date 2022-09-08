import {RouteNames} from '@navigation/routesNames';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import {useCreatePost} from '@screens/Home/hooks/useCreatePost';
import {useGetPosts} from '@screens/Home/hooks/useGetPosts';
import {useDispatch, useSelector} from '@store';
import {incrementByAmount} from '@store/counterSlice';
import {Button} from '@ui/components/Button/Button';
import {verticalScale} from '@ui/theme/scaling';
import {styled} from '@ui/theme/styled-components';
import React from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';

export interface HomeViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.HomeScreen> {}

const triggerAlert = (title: string, message: string) => {
  Alert.alert(title, message, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

export default function HomeView({navigation}: HomeViewProps) {
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const postsQuery = useGetPosts({
    /*always use the option enabled with 'useIsFocused'
     * as react navigation keeps stacks mounted in the background
     * and react query doesn't detect that the screen was revisited
     */

    enabled: useIsFocused(),
  });
  const createPostMutation = useCreatePost();

  return (
    <Root contentContainerStyle={styles.contentContainerStyle}>
      <Title>Implementation of redux</Title>
      <Description> Value: {value}</Description>
      <Button
        text="+ Increment by one "
        onPress={() => {
          dispatch(incrementByAmount(1));
        }}
      />
      <Separator />

      <Title>
        Implementation of react query with typescript supported: fetching data
      </Title>
      <Description>
        Query loading state: {String(postsQuery?.isLoading)}
      </Description>
      <Description>
        Query fetching state: {String(postsQuery?.isFetching)}
      </Description>
      <Description>
        Query Data state: {'\n'} title: {postsQuery?.data?.[0]?.title} {'\n'}
        id: {postsQuery?.data?.[0]?.id}
      </Description>
      <Button text="Refetch data" onPress={postsQuery.refetch} />

      <Separator />

      <Title>
        Implementation of react query with typescript supported: Posting data
      </Title>
      <Description>
        Query loading state: {String(createPostMutation?.isLoading)}
      </Description>
      <Description>
        Query isSuccess state: {String(createPostMutation?.isSuccess)}
      </Description>
      <Description>
        Query isError state: {String(createPostMutation?.isError)}
      </Description>
      <Description>
        Query Data state: {'\n'} title: {postsQuery?.data?.[0]?.title} {'\n'}
        id: {postsQuery?.data?.[0]?.id}
      </Description>

      <Button
        text="Create a post"
        onPress={() => {
          createPostMutation.mutate(
            {
              body: 'Lorem Ipsum body content',
              title: 'Title',
              userId: 1,
            },
            {
              onSuccess(data) {
                triggerAlert('Request sent successfully', JSON.stringify(data));
              },
              onError(error) {
                triggerAlert('Request failed ', error?.toString());
              },
            },
          );
        }}
      />
    </Root>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100,
  },
});

const Root = styled(ScrollView)(({theme: {spacingValues, colors}}) => ({
  flex: 1,
  paddingTop: spacingValues.vLg,
  paddingHorizontal: spacingValues.hSm,
  backgroundColor: colors.orange200,
}));

const Title = styled(Text)(({theme: {spacingValues, textType}}) => ({
  ...textType.BodyLgBold,
  textAlign: 'center',
}));

const Description = styled(Text)(({theme: {spacingValues, textType}}) => ({
  ...textType.BodySm,
  marginBottom: spacingValues.vMd,
}));

const Separator = styled(View)(({theme: {spacingValues, colors}}) => ({
  height: spacingValues.vLg,
  width: '100%',
  background: colors.orange900,
  borderWidth: verticalScale(1),
  marginVertical: spacingValues.vLg,
}));
