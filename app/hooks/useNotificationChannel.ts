import { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
     handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
     }),
});

export default function useNotificationChannel() {
     const [expoPushToken, setExpoPushToken] = useState("");
     const [notification, setNotification] = useState(false);
     const notificationListener: any = useRef();
     const responseListener: any = useRef();

     async function schedulePushNotification(title: string, body: string) {
          await Notifications.scheduleNotificationAsync({
               content: {
                    title: title,
                    body: body,
                    data: { data: "goes here" },
               },
               trigger: { seconds: 2 },
          });
     }

     async function registerForPushNotificationsAsync() {
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
               const { status: existingStatus } =
                    await Notifications.getPermissionsAsync();
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

          Notifications.setNotificationHandler({
               handleNotification: async () => ({
                    shouldShowAlert: true,
                    shouldPlaySound: true,
                    shouldSetBadge: true,
               }),
          });

          return token;
     }


     useEffect(() => {
          registerForPushNotificationsAsync().then((token: any) =>
               setExpoPushToken(token)
          );

          notificationListener.current = Notifications.addNotificationReceivedListener(
               (notification: any) => {
                    setNotification(notification);
               }
          );

          responseListener.current =
               Notifications.addNotificationResponseReceivedListener((response) => {
                    console.log(response);
               });

          return () => {
               Notifications.removeNotificationSubscription(notificationListener.current);
               Notifications.removeNotificationSubscription(responseListener.current);
          };
     }, []);

      return [schedulePushNotification];
}



