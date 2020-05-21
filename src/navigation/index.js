import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from './authStack';
import MainStack from './mainStack';
import { BookForum } from '../screens';

let StackView = createStackNavigator()

const MainNavigation = () => {
    return (
        <StackView.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <StackView.Screen name="Auth" component={AuthStack} />
            <StackView.Screen name="BookForum" component={BookForum} />
            <StackView.Screen name="Main" component={MainStack} />
        </StackView.Navigator>
    )
}

export default MainNavigation
