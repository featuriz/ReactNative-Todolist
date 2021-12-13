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
        backgroundColor: '#CCC',
        justifyContent: 'flex-end',
    },
    footerText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 9,
        paddingTop: 5,
        paddingBottom: 5
    }
})
