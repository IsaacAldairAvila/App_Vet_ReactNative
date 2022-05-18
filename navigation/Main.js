import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import SettingScreen from '../screens/SettingScreen';
import HomeScreenApp from '../screens/HomeScreen';
import ShopScreenApp from '../screens/ShopScreen';
import MapScreenApp from '../screens/MapScreen';
import ChatScreenApp from '../screens/ChatScreen';
const Tab = createMaterialBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: '#2B42AB' }}
            shifting={true}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ color }) => (
                        <Feather name="shopping-bag" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color }) => (
                        <Feather name="map-pin" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <Feather name="message-square" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    )
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
