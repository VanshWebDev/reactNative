import { View, Text, TouchableOpacity, TextInput, Alert, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import AuthenticationMethod from './AuthenticationMethod';
import AuthBtn from './AuthBtn';
import { styles } from '../../styles/Auth/login';

export default function InputField() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };
    const handleInputChange = (key: string, value: string) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = () => {
        Alert.alert(
            'Form Data',
            `Username: ${formData.username}\nEmail: ${formData.email}\nPassword: ${formData.password}`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
    };
    return (
        <>

            {/* <View style={styles.background1}></View> */}
            <View style={styles.container2}>
                <Text style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</Text>


                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={formData.username}
                    onChangeText={(text) => handleInputChange('username', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={formData.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                />


                    <View style={styles.buttonContainer}>
                        <AuthBtn isLoading={true} isLogin={isLogin} handleSubmit={handleSubmit} />
                    </View>




                <TouchableOpacity onPress={toggleAuthMode}>
                    <Text style={styles.toggleButton}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        {isLogin ?
                            <Text style={{ color: '#007AEB' }}>Sign Up</Text> :
                            <Text style={{ color: '#007AEB' }}>Login</Text>}
                    </Text>
                </TouchableOpacity>



                <AuthenticationMethod />


            </View>
        </>
    )
}