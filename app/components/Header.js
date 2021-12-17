import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../globalStyles';

export default function Header() {
    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.title}>My Todo's</Text>
        </View>
    )
}