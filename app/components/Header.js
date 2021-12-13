import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo's</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }
})
