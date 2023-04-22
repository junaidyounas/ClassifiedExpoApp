import * as Font from 'expo-font';

export const loadFonts = async () => {
    await Font.loadAsync({
      'bold': require('./DejaVuSans-Bold.ttf'),
      'regular': require('./DejaVuSans.ttf'),
      'light': require('./DejaVuSans-ExtraLight.ttf'),
      'condensed': require('./DejaVuSansCondensed.ttf'),
      'medium': require('./DejaVuSansCondensed-Bold.ttf')
    });
  }