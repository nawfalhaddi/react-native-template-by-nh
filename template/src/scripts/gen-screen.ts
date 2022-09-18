import Mustache from 'mustache';
import fs from 'fs';
import Path from 'path';
import toCamel from '../utils/toCamel';
import {RouteNames} from '../navigation/routesNames';
const replace = require('replace-in-file');

//Templates

/**
 * @description Screen Wrapper  e.g.
 */
const screenWrapperTemplate = `import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import {{screenName}}View from './components/{{screenName}}View';

export interface {{screenName}}Props
  extends NativeStackScreenProps<RootStackParamList, RouteNames.{{screenName}}Screen> {}

export default function {{screenName}}(props: {{screenName}}Props) {
  return <{{screenName}}View {...props} />;
}
`;

const mainViewTemplate = `import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import {styled} from '@ui/theme/styled-components';
import React from 'react';
import {Text, View} from 'react-native';

export interface {{screenName}}ViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.{{screenName}}Screen> {}

export default function {{screenName}}View({navigation}: {{screenName}}ViewProps) {
  return (
    <MainContainer>
      <Text>Login View</Text>
    </MainContainer>
  );
}
const MainContainer = styled(View)(
  ({theme: {colors, textType, spacingValues}}) => ({
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacingValues.vLg,
    paddingHorizontal: spacingValues.hLg,
  }),
);
`;

//extract screen name
let screenName = process?.argv[2]?.replace(/\s/g, '') as unknown as string;

if (!screenName) {
  console.log('\nPlease provide screen name as argument\n');
  //@ts-ignore
} else if (RouteNames?.[`${toCamel(screenName)}Screen`]) {
  console.log('\nThis screen exists already.\n');
} else {
  screenName = toCamel(screenName);
  let rootPath = Path.resolve(__dirname, '../..');
  const screenPath = Path.join(rootPath, `/src/screens/${screenName}/`);
  const wrapperPath = Path.join(
    rootPath,
    `/src/screens/${screenName}/index.tsx`,
  );
  const mainViewPath = Path.join(
    rootPath,
    `/src/screens/${screenName}/components/${screenName}View/index.tsx`,
  );
  const routeNamesPath = Path.join(rootPath, '/src/navigation/routesNames.ts');
  const navigationTypePath = Path.join(rootPath, '/src/types/navigation.ts');

  fs.mkdirSync(screenPath, {recursive: true});
  fs.mkdirSync(screenPath + `components/${screenName}View`, {recursive: true});
  fs.mkdirSync(screenPath + 'hooks', {recursive: true});
  fs.writeFileSync(screenPath + 'hooks/.gitkeep', '');
  fs.mkdirSync(screenPath + '__tests__', {recursive: true});
  fs.writeFileSync(screenPath + '__tests__/.gitkeep', '');

  if (!fs.existsSync(wrapperPath)) {
    fs.writeFileSync(
      wrapperPath,
      Mustache.render(screenWrapperTemplate, {screenName}),
    );
  }
  if (!fs.existsSync(mainViewPath)) {
    fs.writeFileSync(
      mainViewPath,
      Mustache.render(mainViewTemplate, {screenName}),
    );
  }

  //add screen name to the routeNames enum
  replace({
    files: routeNamesPath,
    from: 'export enum RouteNames {',
    to: `export enum RouteNames {
  ${screenName}Screen = '${screenName}Screen',`,
  })
    .then((changedFiles: any) => {
      console.log(
        'routeNames file was updated successfully.',
        changedFiles.join(', '),
      );
    })
    .catch((error: any) => {
      console.error('Error occurred:', error);
    });

  // add screen name to the navigation type

  replace({
    files: navigationTypePath,
    //Replacement to make (string or regex)
    from: 'export type RootStackParamList = {',
    to: `export type RootStackParamList = {
  [RouteNames.${screenName}Screen]: undefined;`,
  })
    .then((changedFiles: any) => {
      console.log(
        'Navigation type was updated successfully :',
        changedFiles.join(', '),
      );
    })
    .catch((error: any) => {
      console.error('Error occurred:', error);
    });

  console.log(`\n${screenName} screen was created successfully \n`);
}
