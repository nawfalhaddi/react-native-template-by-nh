import {RouteNames} from '@navigation/routesNames';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [RouteNames.HomeScreen]: undefined;
};
