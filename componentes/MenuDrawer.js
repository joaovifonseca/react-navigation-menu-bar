import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function MenuDrawer({ navigation }) {
    function navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress={() => { navigation.navigate(nav)}}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={require('../assets/profile.jpg')} />
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.name}>João Vitor Fonseca</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {navLink('Home', 'Home')}
                    {navLink('Links', 'Links')}
                    {navLink('Settings', 'Settings')}
                    {navLink('Help', 'Help')}
                    {navLink('Contact', 'Contact')}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.description}>Menu Tutorial</Text>
                <Text style={styles.version}>v1.0</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    topLinks: {
        height: 160,
        backgroundColor: '#000'
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingBottom: 450
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    img: {
      height: 70,
      width: 70,
      borderRadius: 50,

    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        paddingBottom: 5,
        textAlign: 'left',

    },
    footer: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderTopWidth: 1,
      borderTopColor: 'lightgray'
    },
    description: {
        flex: 1,
        textAlign: 'left',
        marginLeft: 20,
    },
    version: {
      flex: 1,
      textAlign: 'right',
      marginRight: 20,
      color: 'gray' 
    },
    scroller: {
        flex: 1
    }
})

export default MenuDrawer;

