import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Swap, Shelf, Profile } from '../screens';
import { HomeIcon, SwapIcon, BookShelfIcon, ProfileIcon } from '../assets';
import { theme } from '../theme';

let TabNav = createBottomTabNavigator()

const MainStack = () => {

    return (
        <TabNav.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {

                    if (route.name === 'Home') {
                        return focused ? <HomeIcon active /> : <HomeIcon />
                    } else if (route.name === 'Swap') {
                        return focused ? <SwapIcon active /> : <SwapIcon />;
                    } else if (route.name === 'Bookshelf') {
                        return focused ? <BookShelfIcon active /> : <BookShelfIcon />;
                    } else if (route.name === 'Profile') {
                        return focused ? <ProfileIcon active /> : <ProfileIcon />;
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: theme().primary,
                inactiveTintColor: '#D0CCCC',
                allowFontScaling: true,
                adaptive: true,
                keyboardHidesTabBar: true,
                style: { paddingHorizontal: 30, paddingVertical: 5 },
                labelStyle: { fontFamily: 'Futura-Bold', fontSize: 10 },
            }}
        >
            <TabNav.Screen name="Home" component={Home} />
            <TabNav.Screen name="Swap" component={Swap} />
            <TabNav.Screen name="Bookshelf" component={Shelf} />
            <TabNav.Screen name="Profile" component={Profile} />
        </TabNav.Navigator >
    )
}

export default MainStack