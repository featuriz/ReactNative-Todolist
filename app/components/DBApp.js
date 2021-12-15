import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

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
            console.log('Get Error: ' + e)
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
            console.log('Get Error: ' + e)
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

/*
 const storeData = async (value) => {
    try {
      console.log("seta: " + value)
      const jsonValue = JSON.stringify(value)
      console.log("set: " + jsonValue)
      await AsyncStorage.setItem('@fz_Key', jsonValue)
    } catch (e) {
      console.log("Error on Set:- " + e);
    }

    getDBVal()
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@fz_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("Error on Get:- " + e);
    }
  }
*/