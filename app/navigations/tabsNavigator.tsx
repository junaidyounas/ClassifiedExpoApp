import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "screens/dashboard";
import { screens } from "./constants";
import { Platform, StyleSheet } from "react-native";
import SearchScreen from "screens/Search";
import AddNewAdScreen from "screens/addNewAd";
import ChatScreen from "screens/chat";
import UserScreen from "screens/User";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import { colors } from "theme/colors";
import { textRatio } from "utils/textRatio";
import { AntDesign } from "@expo/vector-icons"; 
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View } from "native-base";


const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
     return (
          <Tab.Navigator
               screenOptions={({ route }: { route: { name: string } }) => ({
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                         switch (route.name) {
                              case screens.Main:
                                   return (
                                        <AntDesign name="home" size={24} color="black" />
                                   );
                              case screens.Seach:
                                   return (
                                        <Feather name="search" size={24} color="black" />
                                   );
                              case screens.Add:
                                   return (
                                             <View style={styles.innerAddStyle}>
                                                  <Ionicons
                                                       name="add-circle-sharp"
                                                       size={widthRatio(15)}
                                                       color="black"
                                                  />
                                             </View>
                                   );
                              case screens.Chat:
                                   return (
                                        <Ionicons
                                             name="chatbubbles-outline"
                                             size={24}
                                             color="black"
                                        />
                                   );
                              case screens.User:
                                   return (
                                        <AntDesign name="user" size={24} color="black" />
                                   );

                              default:
                                   break;
                         }
                    },
                    tabBarLabelStyle: {
                         fontSize: textRatio(15),
                         paddingBottom: heightRatio(1),
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarStyle: {
                         height: Platform.OS === "ios" ? heightRatio(12) : heightRatio(9),
                    },
                    animationEnabled: false,
                    headerShown: false,
                    tabBarShowLabel: false
               })}
          >
               <Tab.Screen name={screens.Main} component={DashboardScreen} />
               <Tab.Screen name={screens.Seach} component={SearchScreen} />
               <Tab.Screen name={screens.Add} component={AddNewAdScreen} />
               <Tab.Screen name={screens.Chat} component={ChatScreen} />
               <Tab.Screen name={screens.User} component={UserScreen} />
          </Tab.Navigator>
     );
}


const styles = StyleSheet.create({
     innerAddStyle: {
          backgroundColor: colors.charcol,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          alignContent: 'center',
          alignSelf: 'center',
          display: "flex",
          width: widthRatio(16),
          height: widthRatio(16),
          borderRadius: widthRatio(8),
          paddingLeft: widthRatio(1)
     },
});