import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SwipeRow } from 'react-native-swipe-list-view'
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../globalStyles';

const TodoItem = React.forwardRef(({ item, swipeHandler }, ref) => {
    return (
        <SwipeRow
            rightActivationValue={-100}
            onRightActionStatusChange={() => swipeHandler(item.key)}
            disableRightSwipe
            preview={true}
        >
            <TouchableOpacity style={globalStyles.rowBack}>
                <MaterialIcons name="delete-forever" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.rowFront}>
                <Text style={globalStyles.itemKey}>{item.key}:</Text>
                <Text style={globalStyles.item}>{item.text}</Text>
            </TouchableOpacity>
        </SwipeRow>
    )
});


export default TodoItem