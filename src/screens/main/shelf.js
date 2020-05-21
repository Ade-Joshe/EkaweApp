import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, Platform, ScrollView, Image, TouchableOpacity } from 'react-native'
import { theme } from '../../theme'
import { gradient, SearchIcon, Microphone, purpleH, harryP, SortIcon, colorP } from '../../assets';

const Shelf = (props) => {

    const { background, alt, primary, text } = theme();

    return (
        <View style={{ flex: 1, backgroundColor: background, marginTop: -20 }}>
            <ScrollView>

                <ImageBackground source={gradient} style={{ width: '100%', height: 275 }} resizeMode={'contain'}>
                    <View style={{ flex: 1, marginHorizontal: 30 }}>
                        <Text style={[styles.headtext, { color: alt }]}>Bookshelf</Text>

                        <View style={[styles.search]}>
                            <SearchIcon />
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholderTextColor={alt}
                                placeholder={'Search bookshelf'}
                            />
                            <Microphone />
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.content}>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('BookForum')}
                        style={{ marginTop: 40, marginBottom: 20, flexDirection: 'row' }}>
                        <Image source={harryP} />
                        <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                            <Text style={[styles.title, {}]}>Harry Potter and the {'\n'}Sorcerer's stone</Text>
                            <Text style={[styles.author]}>By J.LK Rowling</Text>

                            <View style={{ marginTop: 20, marginBottom: 10 }}>
                                <Text style={{
                                    fontSize: 10, lineHeight: 12, color: primary
                                }}>Read 73%</Text>

                                {/*  */}
                                <View style={{ width: '100%', height: 2, backgroundColor: '#AFD7B7', marginTop: 5 }}>
                                    <View style={{ width: '73%', backgroundColor: primary, height: '90%' }}></View>
                                </View>
                            </View>

                            <View style={{ alignItems: 'flex-start' }}>
                                <TouchableOpacity
                                    style={[styles.btn, { backgroundColor: '#AFD7B7' }]}>
                                    <Text style={[styles.labelText, { color: alt }]}>Continue Reading</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ flexDirection: 'row', marginLeft: 'auto', alignItems: 'center', marginBottom: 20 }}>Sort By <SortIcon /> </Text>

                    <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={colorP} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={require('../../assets/1984-2.png')} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={harryP} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={purpleH} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={harryP} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={colorP} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={require('../../assets/1984-2.png')} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, borderRadius: 15 }}>
                            <Image source={purpleH} style={{ width: 106, height: 160 }} />
                            <View style={{ width: 106 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12 }}>The Purple Hibiscus</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, color: 'darkgrey' }}>Alice Walker</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View >

    )
}

export { Shelf }


const styles = StyleSheet.create({
    headtext: {
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 34,
        fontFamily: 'Futura-Bold',
        marginTop: 100
    },
    search: {
        backgroundColor: '#AFD7B7',
        marginTop: 40,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        paddingHorizontal: Platform.OS === 'ios' ? 15 : 10
    },
    input: {
        marginHorizontal: 10
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 30
    },
    headerText: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Futura-Medium'
    },
    card: {
        position: 'relative', width: 220, height: 130, marginTop: 15, marginRight: 10
    },
    cardImg: {
        width: '100%', height: '100%', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0
    },
    cardOverlay: {
        position: 'absolute',
        borderRadius: 5,
        top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#C71CF250', justifyContent: 'center', alignItems: 'center'
    },
    cardOverlayText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center'
    },
    btn: {
        paddingVertical: 6,
        borderRadius: 50,
        paddingHorizontal: 16,
    },
    labelText: {
        fontFamily: 'Futura-Medium', fontSize: 10
    },
    title: { fontFamily: 'Futura-Medium', fontSize: 16, lineHeight: 19 },
    author: { fontFamily: 'Futura-Medium', fontSize: 12, lineHeight: 14, color: 'darkgrey', marginTop: 10 },
    stars: { flexDirection: 'row', marginVertical: 10 }
})