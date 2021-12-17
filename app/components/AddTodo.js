import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'
import { globalStyles } from '../globalStyles';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    const submitText = () => {
        submitHandler(text.trim())
        setText('')
    }
    return (
        <View style={globalStyles.addtodo}>
            <TextInput
                style={globalStyles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={submitText} title="Add todo" color="coral" />
        </View>
    )
}