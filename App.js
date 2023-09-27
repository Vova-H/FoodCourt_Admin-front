import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useFonts} from 'expo-font';
import React, {useEffect, useState} from "react";
import LoadingScreen from "./src/screens/LoadingScreen";
import {setupStore} from "./src/redux/store/store";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import customFonts from "./src/components/UI/CustomFonts";
import ChoosingLanguageScreen from "./src/screens/ChoosingLanguageScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AdminTabs from "./src/navigation/AdminTabs";
import DishDetailScreen from "./src/screens/Admin/DishDetailScreen";
import MySettingsScreen from "./src/screens/MySettingsScreen";
import MyProfileAdminScreen from "./src/screens/Admin/MyProfileAdminScreen";
import ChangeLanguageScreen from "./src/screens/ChangeLanguageScreen";
import AvatarChangeScreen from "./src/screens/AvatarChangeScreen";
import AddImageDishScreen from "./src/screens/Admin/AddImageDishScreen";
import EditDishScreen from "./src/screens/Admin/EditDishScreen";
import EditImageDishScreen from "./src/screens/Admin/EditImageDishScreen";
import ViewUsersScreen from "./src/screens/Admin/ViewUsersScreen";
import UserDetailsScreen from "./src/screens/Admin/UserDetailsScreen";
import WorkerTabs from "./src/navigation/WokerTabs";
import OrderDetailsScreen from "./src/screens/Worker/OrderDetailsScreen";


export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [fontsLoaded] = useFonts(customFonts);
    const store = setupStore();
    useEffect(() => {
        if (fontsLoaded) {
            var timer = setTimeout(() => {
                setLoaded(true);
            }, 2000);
        }
        return () => timer && clearTimeout(timer);
    }, [fontsLoaded]);


    const Stack = createNativeStackNavigator()

    return (
        <Provider store={store}>
            <View style={styles.container}>
                {
                    loaded ?
                        <NavigationContainer>
                            <Stack.Navigator screenOptions={{headerShown: false}}
                                             initialRouteName="ChoosingLanguageScreen">
                                <Stack.Screen name="ChoosingLanguageScreen" component={ChoosingLanguageScreen}/>
                                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                                <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
                                <Stack.Screen name="HomeScreen" component={AdminTabs}
                                              options={{
                                                  headerShown: false,
                                                  gestureEnabled: false,
                                              }}
                                />
                                <Stack.Screen name="DishDetailScreen" component={DishDetailScreen}/>
                                <Stack.Screen name="MyProfileScreen" component={MyProfileAdminScreen}/>
                                <Stack.Screen name="MySettingsScreen" component={MySettingsScreen}/>
                                <Stack.Screen name="ChangeLanguageScreen" component={ChangeLanguageScreen}/>
                                <Stack.Screen name="AvatarChangeScreen" component={AvatarChangeScreen}/>
                                <Stack.Screen name="AddImageDishScreen" component={AddImageDishScreen}/>
                                <Stack.Screen name="EditImageDishScreen" component={EditImageDishScreen}/>
                                <Stack.Screen name="EditDishScreen" component={EditDishScreen}/>
                                <Stack.Screen name="ViewUsersScreen" component={ViewUsersScreen}/>
                                <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen}/>
                                <Stack.Screen name="MainWorkerScreen" component={WorkerTabs}
                                              options={{
                                                  headerShown: false,
                                                  gestureEnabled: false,
                                              }}
                                />
                                <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen}/>
                            </Stack.Navigator>
                        </NavigationContainer>
                        :
                        <LoadingScreen/>
                }
                <StatusBar style="auto"/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
