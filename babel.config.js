module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          alias: {
            components: './app/components',
            screens: './app/screens',
            navigations: './app/navigations',
            constants: './app/constants',
            utils: './app/utils',
            theme: './app/theme',
            assets: './app/assets',
            services: './app/services',
            store: './app/store',
            enum: './app/enum',
            data: './app/data',
            i18n: './app/i18n',
            lang: './app/lang',
            hooks: './app/hooks',
            notifications: './app/notifications',
          },
        },
      ],
      [
        'react-native-reanimated/plugin',
      ]
    ],
   
  };
};