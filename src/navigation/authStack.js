import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { SignUp, Login, GetStarted } from '../screens';

let StackView = createStackNavigator()

const Auth = () => {
    return (
        <StackView.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <StackView.Screen name="GetStarted" component={GetStarted} />
            <StackView.Screen name="Login" component={Login} />
            <StackView.Screen name="SignUp" component={SignUp} />
        </StackView.Navigator>
    )
}

export default Auth
