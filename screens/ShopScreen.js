import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'

const ShopScreenApp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>SHOP</Text>
            <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        </View> 
    );
}

export default ShopScreenApp
