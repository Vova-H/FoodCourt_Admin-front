import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainWorkerScreen from "../screens/Worker/MainWorkerScreen";
import MyProfileWorkerScreen from "../screens/Worker/MyProfileWorkerScreen";


const WorkerTabs = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Main') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home-outline';
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
            <Tab.Screen name="Main" component={MainWorkerScreen}/>
            <Tab.Screen name="Profile" component={MyProfileWorkerScreen}/>
        </Tab.Navigator>
    );
};

export default WorkerTabs;
