import React from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { FullStar, SwapIcon, Heart, harryP, dp3, BackIcon, Plane, Microphone } from '../../assets'
import { theme } from '../../theme';

const BookForum = (props) => {

    const { primary, background, alt } = theme();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../../assets/bookBg.png')} style={{ flex: 1 }}>
                        <View style={{ flex: 2.5 }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                                style={{ padding: 20 }}>
                                <BackIcon />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={harryP} style={{ height: '80%', width: '40%' }} resizeMode={"contain"} />
                            </View>
                        </View>
                        <View style={{ flex: 3, borderTopRightRadius: 25, borderTopLeftRadius: 25, paddingHorizontal: 20, paddingTop: 20, position: 'relative', backgroundColor: '#F9F9F9' }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <FullStar /><Text>{" "}</Text>
                                        <FullStar /><Text>{" "}</Text>
                                        <FullStar /><Text>{" "}</Text>
                                        <FullStar /><Text>{" "}</Text>
                                        <FullStar /><Text>{" "}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: -50, marginBottom: 50 }}>
                                        <View style={{ backgroundColor: primary, padding: 15, borderRadius: 30, marginRight: 20 }}>
                                            <SwapIcon />
                                        </View>
                                        <View style={{ backgroundColor: primary, padding: 15, borderRadius: 30 }}>
                                            <Heart />
                                        </View>
                                    </View>
                                </View>

                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View>
                                        <Text style={{ fontFamily: 'Futura-Medium', fontSize: 18, marginVertical: 5 }}>Harry Potter and the Sorcere's Stone</Text>
                                        <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12, color: 'darkgrey' }}>By J.K Rowling</Text>

                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <View style={{ paddingVertical: 7, paddingHorizontal: 20, backgroundColor: 'pink', borderRadius: 30, marginRight: 20 }}>
                                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: '#C71CF2' }}>Fiction</Text>
                                            </View>
                                            <View style={{ paddingVertical: 7, paddingHorizontal: 20, backgroundColor: '#356E9830', borderRadius: 30 }}>
                                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: '#356E98' }}>Fantasy</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ backgroundColor: primary, padding: 20, marginTop: 20, borderRadius: 5 }}>
                                        <Text style={{ color: 'white', fontSize: 18, lineHeight: 22, fontFamily: 'Futura-Medium' }}>About</Text>
                                        <Text style={{ color: 'white', marginTop: 12, fontSize: 12, lineHeight: 14, fontFamily: 'Futura-Medium' }}>
                                            When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry...
                                    </Text>
                                    </View>

                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ fontSize: 18, lineHeight: 22, fontFamily: 'Futura-Medium' }}>Discussion</Text>

                                        <View style={{ marginTop: 20, flexDirection: 'row', width: '100%' }}>
                                            <Image source={dp3} style={{ marginTop: 5, width: '10%' }} />
                                            <View style={{ padding: 15, marginLeft: 20, backgroundColor: 'white', borderRadius: 15, width: '85%' }}>
                                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>
                                                    This is arguably one of the best books written from our childhood right?
                                        </Text>
                                            </View>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 25, backgroundColor: background, flexDirection: 'row', width: '100%', paddingVertical: 10 }}>
                            <View style={{ backgroundColor: alt, justifyContent: 'center', paddingHorizontal: 10, borderRadius: 90, flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <TextInput
                                    placeholder={'Type a comment'}
                                    style={{ flex: 1 }}
                                />
                                <TouchableOpacity style={{ justifyContent: 'center' }}>
                                    <Microphone />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: primary, padding: 10, borderRadius: 90, height: 45, marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Plane />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View >
    )
}

export { BookForum }