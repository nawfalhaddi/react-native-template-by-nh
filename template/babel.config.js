module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@config': './src/config',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@ui': './src/ui',
          '@utils': './src/utils',
          '@translation': './src/translation',
          '@root': '.',
        },
      },
    ],
  ],
};
