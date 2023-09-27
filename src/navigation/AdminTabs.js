import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Admin/HomeScreen";
import MyProfileAdminScreen from "../screens/Admin/MyProfileAdminScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddNewDishScreen from "../screens/Admin/AddNewDishScreen";


const AdminTabs = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home-outline';
                    } else if (route.name === 'AddDish') {
                        iconName = focused
                            ? 'add-circle-outline'
                            : 'add-circle-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person-circle-outline'
                            : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#FE8C00',
                tabBarInactiveTintColor: '#000',
                tabBarShowLabel: false,
            })}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="AddDish" component={AddNewDishScreen}/>
            <Tab.Screen name="Profile" component={MyProfileAdminScreen}/>
        </Tab.Navigator>
    );
};

export default AdminTabs;
