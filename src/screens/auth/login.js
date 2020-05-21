import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { GreenLogo } from '../../assets'
import { theme } from '../../theme';

const Login = (props) => {

    const { background, primary, text, alt } = theme()
    return (
        <View style={{ flex: 1, backgroundColor: background }}>
            <ScrollView>

                <View style={{ marginTop: 70, marginHorizontal: 40 }}>
                    <GreenLogo />

                    <Text style={[styles.welcomeText, { color: primary }]}>Welcome back</Text>

                    <View style={{ marginTop: 100, marginBottom: 37 }}>
                        <TextInput
                            placeholder={'Email address'}
                            placeholderTextColor={text + '50'}
                            style={[styles.input, { backgroundColor: primary, color: text }]}
                        />
                        <TextInput
                            placeholder={'Password'}
                            placeholderTextColor={text + '50'}
                            secureTextEntry={true}
                            style={[styles.input, { backgroundColor: primary, color: text }]}
                        />
                        <Text style={[styles.auxText, { color: text }]}>Forgot your password ? <Text style={{ color: primary }}>Click here</Text></Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Main')}
                            style={[styles.btn, { backgroundColor: primary }]}>
                            <Text style={{
                                color: alt, fontFamily: 'Futura-Medium'
                            }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.auxText, { textAlign: 'center', color: text, marginTop: 20 }]}>
                        Don’t have an account with Ekawe? {"\n"}
                        <Text
                            onPress={() => props.navigation.navigate('SignUp')}
                            style={{ color: primary }}>Create an account</Text>
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}

export { Login }


const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
        fontFamily: 'Futura-Bold',
        lineHeight: 22
    },
    input: {
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 15
    },
    auxText: {
        fontFamily: 'Futura-Medium',
        fontSize: 12,
        textAlign: 'right'
    },
    btn: {
        paddingVertical: 12,
        borderRadius: 50,
        paddingHorizontal: 50,
    }
})