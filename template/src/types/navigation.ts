import {RouteNames} from '@navigation/routesNames';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [RouteNames.HomeScreen]: undefined;
  [RouteNames.DetailsScreen]: undefined;
  [RouteNames.LoginScreen]: undefined;
  [RouteNames.SignUpScreen]: undefined;
};
