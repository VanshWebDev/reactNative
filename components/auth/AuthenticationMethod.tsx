import { View, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import React from 'react'

export default function AuthenticationMethod() {
    return (
        <View style={styles.authMethodContainer}>
            <TouchableOpacity onPress={() => Alert.alert("signup with google")}  >
                <View>
                    <Image style={styles.authMethod} source={require('../../assets/images/auth/google.png')} />
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => Alert.alert("signup with apple")}>
                <View>
                    <Image style={styles.authMethod} source={require('../../assets/images/auth/apple.png')} />
                </View>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => Alert.alert("signup with facebook")}>
                <View>
                    <Image style={styles.authMethod} source={require('../../assets/images/auth/facebook.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    authMethodContainer: {
        marginTop: 20,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    authMethod: {
        width: 40,
        height: 40,
        marginBottom: 20,
    }
})