import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Bottom() {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <MaterialIcons name="home-filled" size={30} color="#1da124" />
                <Ionicons name="chatbubble-ellipses-outline" size={30} color="black" />
                <Ionicons name="cart-outline" size={30} color="black" />
                <Ionicons name="menu-outline" size={30} color="black" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 10
    },
    menu: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1,
    }
})
