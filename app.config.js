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
                    "CFBundleAllowMixedLocalizations": true,
                    "ExpoLocalization_supportsRTL": true
               }
          },
          "android": {
               "adaptiveIcon": {
                    "foregroundImage": "./assets/adaptive-icon.png",
                    "backgroundColor": "#ffffff"
               },
               "package": "com.kamonline.app"
          },
          "web": {
               "favicon": "./assets/favicon.png"
          },
          "extra": {
               "eas": {
                    "projectId": "491b5d62-509c-48bb-ac2f-ca177b1181cb"
               },
               "supportsRTL": true,
               firebaseApiKey: process.env.FIREBASE_API_KEY,
               firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
               firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
               firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
               firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
               firebaseAppId: process.env.FIREBASE_APP_ID,
               googleWebClientId: process.env.GOOGLE_WEB_CLIENT
          },
          "plugins": ["expo-localization"],
          "scheme": "yourscheme"
     }
}

