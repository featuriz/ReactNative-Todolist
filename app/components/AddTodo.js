import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    const submitText = () => {
        submitHandler(text)
        setText('')
    }
    return (
        <View style={styles.addtodo}>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={submitText} title="Add todo" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    addtodo: {
        backgroundColor: '#fff'
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
