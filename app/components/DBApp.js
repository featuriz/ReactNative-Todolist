import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function DBApp() {
    const initVal = [
        { text: 'drink coffee', key: 1 }
    ]
    const [value, setValue] = useState(initVal);
    const { getItem, setItem } = useAsyncStorage('@storage_key');


    var addTodo = (text) => {
        return [
            { text: text, key: (value.length > 0 ? (value[0].key + 1) : 1) },
            ...value
        ]
    }


    const getMyObject = async () => {
        try {
            const jsonValue = await getItem()
            var nv = jsonValue != null ? JSON.parse(jsonValue) : null
            setValue(nv);
        } catch (e) {
            Alert.alert('OOPS!', 'Get Error: ' + e)
            setValue(initVal);
        }
    }
    const setObjectValue = async (value) => {
        const newVal = addTodo(value)
        try {
            const jsonValue = JSON.stringify(newVal)
            await setItem(jsonValue)
            setValue(newVal);
        } catch (e) {
            Alert.alert('OOPS!', 'Set Error: ' + e)
        }
    }

    useEffect(() => {
        getMyObject();
    }, []);

    return (
        <View style={{ margin: 40 }}>
            <Text>Current value: {value[0].text} and Length {value.length}</Text>
            <TouchableOpacity
                onPress={() =>
                    setObjectValue(
                        Math.random()
                            .toString(36)
                            .substr(2, 5)
                    )
                }
            >
                <Text>Update value</Text>

            </TouchableOpacity>
        </View>
    );
}
