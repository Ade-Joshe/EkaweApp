import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { theme } from '../../theme'
import { GreenLogo } from '../../assets'

const SignUp = (props) => {

    const { background, primary, text, alt } = theme()

    return (
        <View style={{ flex: 1, backgroundColor: background }}>
            <ScrollView>
                <View style={{ marginVertical: 70, marginHorizontal: 40 }}>
                    <GreenLogo />

                    <Text style={[styles.welcomeText, { color: primary }]}>Readers are leaders, {"\n"} welcome here</Text>

                    <View style={{ marginTop: 80, marginBottom: 40 }}>
                        <TextInput
                            placeholder={'Enter your fullname'}
                            placeholderTextColor={text+ '50'}
                            style={[styles.input, { backgroundColor: primary, color: text + '90' }]}
                        />
                        <TextInput
                            placeholder={'Enter your email address'}
                            placeholderTextColor={text+ '50'}
                            style={[styles.input, { backgroundColor: primary, color: text + '90' }]}
                        />
                        <TextInput
                            placeholder={'Email address'}
                            placeholderTextColor={text+ '50'}
                            style={[styles.input, { backgroundColor: primary, color: text + '90' }]}
                        />
                        <TextInput
                            placeholder={'Set a password'}
                            placeholderTextColor={text+ '50'}
                            style={[styles.input, { backgroundColor: primary, color: text + '90' }]}
                        />

                        <Text style={[styles.auxText, { textAlign: 'center', marginTop: 20 }]}>
                            By proceeding you are agreeing to our {'\n'}<Text style={{ color: primary }}>Terms & Conditions</Text> and <Text style={{ color: primary }}>Privacy policy</Text></Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Login')}
                            style={[styles.btn, { backgroundColor: primary }]}>
                            <Text style={{
                                color: alt, fontFamily: 'Futura-Medium'
                            }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.auxText, { textAlign: 'center', color: text, marginTop: 20 }]}>
                        Already a user?
                        <Text
                            onPress={() => props.navigation.navigate('Login')}
                            style={{ color: primary }}> Login here</Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export { SignUp }

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
        fontFamily: 'Futura-Bold',
        lineHeight: 22
    },
    input: {
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 15
    },
    auxText: {
        fontFamily: 'Futura-Medium',
        fontSize: 12,
        textAlign: 'right',
        lineHeight: 14
    },
    btn: {
        paddingVertical: 12,
        borderRadius: 50,
        paddingHorizontal: 50,
    }
})