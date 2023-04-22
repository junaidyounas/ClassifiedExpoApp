import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export async function registerForPushNotificationsAsync() {
     let token;

     if (Platform.OS === "android") {
          await Notifications.setNotificationChannelAsync("default", {
               name: "default",
               importance: Notifications.AndroidImportance.MAX,
               vibrationPattern: [0, 250, 250, 250],
               lightColor: "#FF231F7C",
          });
     }

     if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== "granted") {
               const { status } = await Notifications.requestPermissionsAsync();
               finalStatus = status;
          }
          if (finalStatus !== "granted") {
               console.log(
                    "===> ~ file: useNotificationChannel.ts:77 ~ ",
                    "Failed to get push token for push notification!"
               );

               return;
          }
          token = (
               await Notifications.getExpoPushTokenAsync({
                    projectId: "db281952-848f-4bbc-ae23-0049629e22ee",
               })
          ).data;
          console.log(token);
     } else {
          console.log(
               "===> ~ file: useNotificationChannel.ts:77 ~ ",
               "Must use physical device for Push Notifications!"
          );
     }

     return token;
}

export async function schedulePushNotification() {
     await Notifications.scheduleNotificationAsync({
          content: {
               title: "You've got mail! 📬",
               body: "Here is the notification body",
               data: { data: "goes here" },
          },
          trigger: { seconds: 2 },
     });
}
