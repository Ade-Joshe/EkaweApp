import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, Platform, ScrollView, Image, TouchableOpacity } from 'react-native'
import { theme } from '../../theme'
import { gradient, SearchIcon, Microphone, youth, IllustrationReading, colorP, FullStar, EmptyStar, purpleH, harryP } from '../../assets';

const Home = () => {

    const { background, alt, primary, text } = theme();
    const [activeNav, setNav] = useState("pop");

    return (
        <View style={{ flex: 1, backgroundColor: background, marginTop: -20 }}>
            <ScrollView>

                <ImageBackground source={gradient} style={{ width: '100%', height: 275 }} resizeMode={'contain'}>
                    <View style={{ flex: 1, marginHorizontal: 30 }}>
                        <Text style={[styles.headtext, { color: alt }]}>Explore</Text>

                        <View style={[styles.search]}>
                            <SearchIcon />
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholderTextColor={alt}
                                placeholder={'Find your favourite title/author'}
                            />
                            <Microphone />
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.content}>

                    <View style={{ marginTop: 40, marginBottom: 20 }}>
                        <Text style={[styles.headerText, {}]}>Categories</Text>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.card}>
                                <Image source={youth} style={styles.cardImg} />
                                <View style={styles.cardOverlay}>
                                    <Text style={[styles.cardOverlayText, { color: alt, }]}>Young Adult{"\n"}Fiction</Text>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <Image source={youth} style={styles.cardImg} />
                                <View style={styles.cardOverlay}>
                                    <Text style={[styles.cardOverlayText, { color: alt, }]}>Historical {"\n"}Sattires</Text>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <Image source={youth} style={styles.cardImg} />
                                <View style={styles.cardOverlay}>
                                    <Text style={[styles.cardOverlayText, { color: alt, }]}>Young Adult{"\n"}Fiction</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>


                    <View style={{ marginVertical: 20 }}>
                        <Text style={[styles.headerText, {}]}>Reading Challenge</Text>

                        <View style={{ backgroundColor: alt, flexDirection: 'row', padding: 15, borderRadius: 5, marginTop: 19 }}>

                            <View style={{ justifyContent: 'center', position: 'absolute', left: 10, top: 50 }}>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 12, lineHeight: 14 }}>Read 3 books by 3 women authors</Text>
                                <Text style={{ fontFamily: 'Futura-Medium', fontSize: 10, lineHeight: 12, color: primary, marginTop: 10 }}>Start Challenge</Text>
                            </View>

                            <View style={{ marginLeft: 'auto' }}>
                                <IllustrationReading />
                            </View>
                        </View>
                    </View>


                    <View style={{ marginVertical: 10 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => setNav('pop')}
                                    style={{ marginRight: 40, borderBottomWidth: activeNav === 'pop' ? 4 : 0, borderColor: primary, paddingBottom: 10 }}>
                                    <Text style={{ fontSize: 18, lineHeight: 22, fontFamily: 'Futura-Medium', color: activeNav === 'pop' ? text : 'darkgrey' }}>Popular</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setNav('bes')}
                                    style={{ marginRight: 40, borderBottomWidth: activeNav === 'bes' ? 4 : 0, borderColor: primary, }}
                                >
                                    <Text style={{ fontSize: 18, lineHeight: 22, fontFamily: 'Futura-Medium', color: activeNav === 'bes' ? text : 'darkgrey' }}>Best Sellers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setNav('rec')}
                                    style={{ marginRight: 40, borderBottomWidth: activeNav === 'rec' ? 4 : 0, borderColor: primary, }}
                                >
                                    <Text style={{ fontSize: 18, lineHeight: 22, fontFamily: 'Futura-Medium', color: activeNav === 'rec' ? text : 'darkgrey' }}>Recommended</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <View>

                        <View style={{ backgroundColor: alt, padding: 10, flexDirection: 'row', marginVertical: 10, borderRadius: 10 }}>
                            <Image source={colorP} />
                            <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                                <Text style={[styles.title, {}]}>The Color Purple</Text>
                                <Text style={[styles.author]}>By Alice Walker</Text>
                                <View style={styles.stars}>
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <EmptyStar />
                                </View>

                                <View style={{ alignItems: 'flex-start' }}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('Main')}
                                        style={[styles.btn, { backgroundColor: '#AFD7B7' }]}>
                                        <Text style={[styles.labelText, { color: primary }]}>Fiction</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: alt, padding: 10, flexDirection: 'row', marginVertical: 10, borderRadius: 10 }}>
                            <Image source={purpleH} />
                            <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                                <Text style={[styles.title, {}]}>Purple Hibiscus</Text>
                                <Text style={[styles.author]}>By Alice Walker</Text>
                                <View style={styles.stars}>
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                </View>

                                <View style={{ alignItems: 'flex-start' }}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('Main')}
                                        style={[styles.btn, { backgroundColor: '#AFD7B7' }]}>
                                        <Text style={[styles.labelText, { color: primary }]}>Fiction</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: alt, padding: 10, flexDirection: 'row', marginVertical: 10, borderRadius: 10 }}>
                            <Image source={harryP} />
                            <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                                <Text style={[styles.title, {}]}>Harry Potter and the {'\n'}Sorcerer's stone</Text>
                                <Text style={[styles.author]}>By J.LK Rowling</Text>
                                <View style={styles.stars}>
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <EmptyStar />
                                </View>

                                <View style={{ alignItems: 'flex-start' }}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('Main')}
                                        style={[styles.btn, { backgroundColor: '#AFD7B7' }]}>
                                        <Text style={[styles.labelText, { color: primary }]}>Fiction</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

export { Home }

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
        paddingHorizontal: 30,
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
        fontFamily: 'Futura-Medium', fontSize: 9
    },
    title: { fontFamily: 'Futura-Medium', fontSize: 14, lineHeight: 17 },
    author: { fontFamily: 'Futura-Medium', fontSize: 12, lineHeight: 14, color: 'darkgrey' },
    stars: { flexDirection: 'row', marginVertical: 10 }
})