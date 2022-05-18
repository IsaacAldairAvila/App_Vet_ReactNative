import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreenApp = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: '#EAEAEA' }} >
            <View style={{ paddingTop: 12.5, paddingBottom: 12.5, paddingLeft: 40, paddingRight: 40, }}>
                <Text style={styles.text}>
                    RESERVA MEDICA
                </Text>
                <View style={styles.box}>
                    <LinearGradient
                        colors={['#41A3FF', '#60DFCD']}
                        style={styles.container}
                    >
                        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
                    </LinearGradient>
                </View>
                <Text style={styles.text}>
                    RESERVA BAÑO
                </Text>
                <View style={styles.box}>
                    <LinearGradient
                        colors={['#41A3FF', '#60DFCD']}
                        style={styles.container}
                    >
                        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
                    </LinearGradient>
                </View>
                <Text style={styles.text}>
                    LLENAR DATOS
                </Text>
                <View style={styles.box}>
                    <LinearGradient
                        colors={['#41A3FF', '#60DFCD']}
                        style={styles.container}
                    >
                        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
                    </LinearGradient>
                </View>
                <Text style={styles.text}>
                    TIPS
                </Text>
                <View style={styles.box}>
                    <LinearGradient
                        colors={['#41A3FF', '#60DFCD']}
                        style={styles.container}
                    >
                        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
                    </LinearGradient>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    box: {
        height: 200,
        padding: 15,
        width: 'auto',
    },
    text: {
        color: '#5B6889',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default HomeScreenApp
