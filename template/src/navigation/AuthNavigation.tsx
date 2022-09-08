import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigation = () => {
  // add stack navigator and add screens related to logged out user
  //check react navigation docs for more details
  //https://reactnavigation.org/docs/auth-flow/
  return null;
};

export default AuthNavigation;
