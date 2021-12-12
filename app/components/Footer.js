import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>By Sudhakar Krishnan</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: .5,
        backgroundColor: '#CCC',
        justifyContent: 'flex-end'
    },
    footerText: {
        textAlign: 'center',
        fontSize: 10,
        color: '#000',
        padding: 5,
        marginBottom: 10
    }
})
