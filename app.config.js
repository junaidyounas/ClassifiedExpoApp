import 'dotenv/config';

export default {
     "expo": {
          "name": "slappfirebase",
          "slug": "slappfirebase",
          "version": "1.0.0",
          "orientation": "portrait",
          "icon": "./assets/icon.png",
          "userInterfaceStyle": "light",
          "splash": {
               "image": "./assets/splash.png",
               "resizeMode": "contain",
               "backgroundColor": "#ffffff"
          },
          "jsEngine": "hermes",
          "assetBundlePatterns": ["**/*"],
          "ios": {
               "supportsTablet": true,
               "jsEngine": "jsc",
               "infoPlist": {
                    "CFBundleAllowMixedLocalizations": true
               }
          },
          "android": {
               "adaptiveIcon": {
                    "foregroundImage": "./assets/adaptive-icon.png",
                    "backgroundColor": "#ffffff"
               }
          },
          "web": {
               "favicon": "./assets/favicon.png"
          },
          "extra": {
               "supportsRTL": true,
               firebaseApiKey: process.env.FIREBASE_API_KEY,
               firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
               firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
               firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
               firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
               firebaseAppId: process.env.FIREBASE_APP_ID
          },
          "plugins": ["expo-localization"]
     }
}
