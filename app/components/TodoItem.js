import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SwipeRow } from 'react-native-swipe-list-view'

const TodoItem = React.forwardRef(({ item, swipeHandler }, ref) => {
    return (
        <SwipeRow
            rightActivationValue={-100}
            onRightActionStatusChange={() => swipeHandler(item.key)}
            disableRightSwipe
            preview={true}
        >
            <View style={styles.rowBack}>
                <Text style={styles.deleteBtn}>Delete</Text>
            </View>
            <TouchableOpacity style={styles.rowFront}>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </SwipeRow>
    )
});

const styles = StyleSheet.create({
    rowFront: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    item: {
        padding: 16,
    },
    rowBack: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    deleteBtn: {
        backgroundColor: '#f00',
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
        fontSize: 18,
        opacity: 0.5
    }
})

export default TodoItem