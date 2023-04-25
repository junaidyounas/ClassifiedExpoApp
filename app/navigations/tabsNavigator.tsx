import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "native-base";
import { Platform, StyleSheet } from "react-native";
import SearchScreen from "screens/Search";
import UserScreen from "screens/User";
import AddNewAdScreen from "screens/addNewAd";
import ChatScreen from "screens/chat";
import DashboardScreen from "screens/dashboard";
import { colors } from "theme/colors";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import { textRatio } from "utils/textRatio";
import { screens } from "./constants";

const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
     return (
          <Tab.Navigator
               screenOptions={({ route }: { route: { name: string } }) => ({
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                         switch (route.name) {
                              case screens.Main:
                                   return (
                                        <AntDesign
                                             name="home"
                                             size={24}
                                             color={focused ? colors.coral : "black"}
                                        />
                                   );
                              case screens.Seach:
                                   return (
                                        <Feather
                                             name="search"
                                             size={24}
                                             color={focused ? colors.coral : "black"}
                                        />
                                   );
                              case screens.Add:
                                   return (
                                        <View style={styles.innerAddStyle}>
                                             <Ionicons
                                                  name="add-circle-sharp"
                                                  size={widthRatio(15)}
                                                  color={colors.coral}
                                             />
                                        </View>
                                   );
                              case screens.Chat:
                                   return (
                                        <Ionicons
                                             name="chatbubbles-outline"
                                             size={24}
                                             color={focused ? colors.coral : "black"}
                                        />
                                   );
                              case screens.User:
                                   return (
                                        <AntDesign
                                             name="user"
                                             size={24}
                                             color={focused ? colors.coral : "black"}
                                        />
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
                    tabBarShowLabel: false,
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
          backgroundColor: colors.transparent,
          marginTop: -heightRatio(5),
     },
});
