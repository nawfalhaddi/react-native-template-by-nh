## Get started

This template was made with love, to share in details our personal approach to design a react native application with best third-party libraries, please check our [documentation](https://nawfalhaddi.github.io/react-native-template-by-nh/) for more details.
If you have any idea or suggestion to improve this template, please feel free to reach out to [us](https://www.linkedin.com/in/nawfalhaddi/) or open an issue/PR inside this repo.

## Libraries that are used in this template:

- Navigation: `react-navigation V6`
- API request: `react-query` and `axios`
- State Management: `redux-toolkit` and `redux-persist`
- Translation: `i18next` and `react-i18next` `react-native-localize`
- Forms: `react-hook-form` and `yup`
- Storage: `react-native-mmkv`
- Styling: `styled-components`
- Testing: `@testing-library/react-native`
- Documentation: `Storybook` using `react-native-web`

## What you'll need:

- Make sure your environnement is ready to run a react native application. if it's not, please check the [official documentation](https://reactnative.dev/docs/environment-setup) of react native to set up your environnement.

## Start a new project:

Once your environnement you're ready to go with creating a new react native application using our template.

- First, navigate to where you want to start your project and run the following command.

```
npx react-native init MyApp --template react-native-template-by-nh
```

- Once it's done, run this command in order to navigate to your new project and set it up for android and ios:

```
cd MyApp && git init && yarn setup
```

> **_Note:_** the script `yarn setup` contains all necessary commands to setup your application for android and ios. if you want to know what are these commands check the script `setup` inside `package.json` file.
