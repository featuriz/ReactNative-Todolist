import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../globalStyles';

export default function Footer() {
    return (
        <View style={globalStyles.footer}>
            <Text style={globalStyles.footerText}>By Sudhakar Krishnan</Text>
        </View>
    )
}
