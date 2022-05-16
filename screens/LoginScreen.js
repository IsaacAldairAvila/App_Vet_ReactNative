import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core'


const LoginScreen = ( ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user)
                navigation.replace("Main")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => {
                const createButtonAlert = () =>
                    Alert.alert('Error', error.message, [
                        {
                            text: 'Close',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        }
                    ]);
                createButtonAlert();
                console.log(error)
            })
    };

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => {
                const createButtonAlert = () =>
                    Alert.alert('Error', error.message, [
                        {
                            text: 'Close',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        }
                    ]);
                createButtonAlert();
                console.log(error)
            })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <Text style={styles.text}>
                    Email:
                </Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text => setEmail(text))}
                    style={styles.input}
                />
                <Text style={styles.text}>
                    Password:
                </Text>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text => setPassword(text))}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={{ ...styles.button, ...styles.buttonOutline }}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    },
    text: {
        marginTop: 20,
        color: '#000',
        padding: 10,
    }
})
export default LoginScreen;