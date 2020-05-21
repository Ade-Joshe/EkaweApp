import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, Platform, ScrollView, Image } from 'react-native'
import { theme } from '../../theme'
import { gradient, SearchIcon, Microphone, dp1, bk1, dp2, bk2, dp3, bk3 } from '../../assets';


const Swap = () => {

    const { background, alt, primary } = theme();

    return (
        <View style={{ flex: 1, backgroundColor: background, marginTop: -20 }}>
            <ScrollView>

                <ImageBackground source={gradient} style={{ width: '100%', height: 275 }} resizeMode={'contain'}>

                    <View style={{ flex: 1, marginHorizontal: 30 }}>
                        <Text style={[styles.headtext, { color: alt }]}>Swap Books</Text>

                        <View style={[styles.search]}>
                            <SearchIcon />
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholderTextColor={alt}
                                placeholder={'Search swap history'}
                            />
                            <Microphone />
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.content}>

                    {/* card1 */}
                    <View style={[styles.card, { backgroundColor: alt }]}>
                        <View style={styles.user}>
                            <Image source={dp1} style={styles.userImg} />
                            <View>
                                <Text style={styles.title}>Daniel Radcliffe</Text>
                                <Text style={styles.author} >Sent a book swap request</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={bk1} style={[styles.bkImg, { flex: 1 }]} />
                            <View style={[styles.bookDetail, { flex: 2.5 }]}>
                                <Text style={styles.title}>1984</Text>
                                <Text style={styles.author}>By George Orwell</Text>
                                <Text style={[styles.author, { color: primary, marginTop: 10 }]}>
                                    “If you loved Animal Farm, you’ll like this!”
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* card2 */}
                    <View style={[styles.card, { backgroundColor: alt }]}>
                        <View style={styles.user}>
                            <Image source={dp2} style={styles.userImg} />
                            <View>
                                <Text style={styles.title}>Daniel Radcliffe</Text>
                                <Text style={styles.author} >Sent a book swap request</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={bk2} style={styles.bkImg} />
                            <View style={[styles.bookDetail, {}]}>
                                <Text style={styles.title}>1984</Text>
                                <Text style={styles.author}>By George Orwell</Text>
                                <Text
                                    style={[styles.author, { color: primary, marginTop: 10 }]}>“If you loved Animal Farm,
                                    you’ll like this!”</Text>
                            </View>
                        </View>
                    </View>

                    {/* card3 */}
                    <View style={[styles.card, { backgroundColor: alt }]}>
                        <View style={styles.user}>
                            <Image source={dp3} style={styles.userImg} />
                            <View>
                                <Text style={styles.title}>Daniel Radcliffe</Text>
                                <Text style={styles.author} >Sent a book swap request</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={bk3} style={styles.bkImg} />
                            <View style={[styles.bookDetail, {}]}>
                                <Text style={styles.title}>1984</Text>
                                <Text style={styles.author}>By George Orwell</Text>
                                <Text
                                    style={[styles.author, { color: primary, marginTop: 10 }]}>“If you loved Animal Farm,
                                    you’ll like this!”</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.card, { backgroundColor: alt }]}>
                        <View style={styles.user}>
                            <Image source={dp1} style={styles.userImg} />
                            <View>
                                <Text style={styles.title}>Daniel Radcliffe</Text>
                                <Text style={styles.author} >Sent a book swap request</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={bk1} style={styles.bkImg} />
                            <View style={[styles.bookDetail, {}]}>
                                <Text style={styles.title}>1984</Text>
                                <Text style={styles.author}>By George Orwell</Text>
                                <Text
                                    style={[styles.author, { color: primary, marginTop: 10 }]}>“If you loved Animal Farm,
                                    you’ll like this!”</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

export { Swap }

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
        marginVertical: 30
    },
    card: {
        marginVertical: 10, padding: 15, borderRadius: 10
    },
    user: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#e4e4e4', paddingBottom: 10 },
    userImg: {
        width: 35, height: 35, marginRight: 15, borderRadius: 25
    },
    bkImg: {
        width: 90, height: 90, marginRight: 20
    },
    bookDetail: {
        justifyContent: 'center'
    },
    title: { fontFamily: 'Futura-Medium', fontSize: 14, lineHeight: 17 },
    author: { fontFamily: 'Futura-Medium', fontSize: 10, lineHeight: 12, color: 'darkgrey' },
    stars: { flexDirection: 'row', marginVertical: 10 }
})