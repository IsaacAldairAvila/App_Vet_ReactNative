import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'

const ChatScreenApp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>CHAT</Text>
            <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        </View>
    );
}

export default ChatScreenApp