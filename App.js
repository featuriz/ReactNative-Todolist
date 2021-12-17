import React, { useState, useEffect } from 'react';
import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback, View, } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { globalStyles } from './app/globalStyles';
import AddTodo from './app/components/AddTodo';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import TodoItem from './app/components/TodoItem';


export default function App() {
  const initVal = [
    { text: 'buy milk', key: 3 },
    { text: 'prepare coffee', key: 2 },
    { text: 'drink coffee', key: 1 }
  ]
  const [todos, setTodos] = useState(initVal)
  const { getItem, setItem } = useAsyncStorage('@fz_todo');

  // Program Handlers
  var addTodo = (text) => {
    return [
      { text: text, key: (todos.length > 0 ? (todos[0].key + 1) : 1) },
      ...todos
    ]
  }
  var deleteTodo = (key) => {
    return todos.filter(todo => todo.key !== key)
  }
  var isOldTodo = (text) => {
    return todos.filter(todo => todo.text == text)
  }
  const getMyObject = async () => {
    try {
      const jsonValue = await getItem()
      var nv = jsonValue != null ? JSON.parse(jsonValue) : initVal
      setTodos(nv);
    } catch (e) {
      setTodos(initVal);
      Alert.alert('OOPS!', 'Error when getting data! ' + e)
    }
  }

  useEffect(() => {
    getMyObject();
  }, []);

  const swipeHandler = async (key) => {
    var newVal = deleteTodo(key)
    try {
      const jsonValue = JSON.stringify(newVal)
      await setItem(jsonValue)
      setTodos(newVal);
    } catch (e) {
      Alert.alert('OOPS!', 'Error when deleting data! ' + e)
    }
  }
  const submitHandler = async (text) => {
    if ((text.length < 3) || (text.length == null)) {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long')
    }
    else {
      var inDB = isOldTodo(text)
      if (inDB.length == 0) {
        var newVal = addTodo(text)
        try {
          const jsonValue = JSON.stringify(newVal)
          await setItem(jsonValue)
          setTodos(newVal);
        } catch (e) {
          Alert.alert('OOPS!', 'Error when submitting data! ' + e)
        }
        Keyboard.dismiss()
      } else {
        Alert.alert('OOPS!', 'Already Exist!')
      }
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <SafeAreaView style={globalStyles.container}>
        <Header />
        <View style={globalStyles.content}>
          <View style={globalStyles.list}>
            <SwipeListView
              data={todos}
              renderItem={({ index, item }) => (
                <TodoItem key={index} item={item} swipeHandler={swipeHandler} />
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
          </View>
          <AddTodo submitHandler={submitHandler} />
        </View>
        <Footer />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}
