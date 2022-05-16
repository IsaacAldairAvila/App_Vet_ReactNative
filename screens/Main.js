import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import SettingScreen from './SettingScreen';
import HomeScreenApp from './HomeScreen';
import ShopScreenApp from './ShopScreen';
import MapScreenApp from './MapScreen';
import ChatScreenApp from './ChatScreen';
const Tab = createMaterialBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#fff"
            labelStyle={{ fontSize: 12 }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ color }) => (
                        <Feather name="shopping-bag" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color }) => (
                        <Feather name="map-pin" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <Feather name="message-square" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
function HomeScreen({ navigation }) {
    return (
        <HomeScreenApp navigation={navigation} />
    );
}

function ShopScreen({ navigation }) {
    return (
        <ShopScreenApp navigation={navigation} />
    );
}

function MapScreen({ navigation }) {
    return (
        <MapScreenApp navigation={navigation} />
    );
}

function ChatScreen({ navigation }) {
    return (
        <ChatScreenApp navigation={navigation} />
    );
}

export default Main
