import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../theme'

const Profile = () => {

    let Theme = useContext(ThemeContext);

    return (
        <View style={{ backgroundColor: Theme.theme.background, flex: 1 }}>
            {/* <TouchableOpacity onPress={() => Theme.setTheme(Theme.theme.type)}>
                <Text>Change Theme</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export { Profile }
