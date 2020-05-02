import React from 'react';
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function MenuBotton({navigation}) {
        return(
            <Ionicons
                name="md-menu"
                color="#000000"
                size={32}
                style={styles.menuIcon}
                onPress={() => navigation.toggleDrawer()}
            >
            </Ionicons>
        )
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20
    }
})

export default MenuBotton;

