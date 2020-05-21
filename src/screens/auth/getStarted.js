import React from 'react'
import { View, StatusBar, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'
import { BigHuman, WhiteLogo, GreenLogo } from '../../assets'
import { theme } from '../../theme'

const GetStarted = (props) => {

    const { primary, background, text, alt } = theme();

    return (
        <View style={{ flex: 1, backgroundColor: background }}>
            {/* <StatusBar hidden /> */}

            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, marginVertical: 70, justifyContent: 'space-between', paddingHorizontal: 30 }}>

                    <View>
                        <GreenLogo />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                        <BigHuman />
                    </View>

                    <View>
                        <Text style={[styles.instructions, { color: text }]}>
                            The world’s largest library and book sharing platform for readers who cannot simply get enough.
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Login')}
                            style={[styles.btn, { backgroundColor: primary }]}>
                            <Text style={{
                                color: alt, fontFamily: 'Futura-Medium'
                            }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export { GetStarted }


const styles = StyleSheet.create({
    instructions: {
        fontFamily: 'Futura-Medium',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
    },
    btn: {
        paddingVertical: 15,
        borderRadius: 50,
        paddingHorizontal: 35,
    }
})