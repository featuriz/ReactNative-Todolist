import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SwipeRow } from 'react-native-swipe-list-view'
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = React.forwardRef(({ item, swipeHandler }, ref) => {
    return (
        <SwipeRow
            rightActivationValue={-100}
            onRightActionStatusChange={() => swipeHandler(item.key)}
            disableRightSwipe
            preview={true}
        >
            <View style={styles.rowBack}>
                <MaterialIcons name="delete-forever" size={24} color="red" />
            </View>
            <TouchableOpacity style={styles.rowFront}>
                <Text style={styles.itemKey}>{item.key}:</Text>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </SwipeRow>
    )
});

const styles = StyleSheet.create({
    rowFront: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        padding: 16,
    },
    itemKey: {
        color: 'teal'
    },
    item: {
        paddingLeft: 5
    },
    rowBack: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 15,
    }
})

export default TodoItem