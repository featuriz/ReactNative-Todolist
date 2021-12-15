import React, { useState, useEffect } from 'react';
import { Alert, Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
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
    if (text.length > 3) {
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
      Alert.alert('OOPS!', 'Todos must be over 3 chars long')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <SwipeListView
              data={todos}
              renderItem={({ index, item }) => (
                <TodoItem key={index} item={item} swipeHandler={swipeHandler} />
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
          </View>
        </View>
        <Footer />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    padding: 40,
    marginBottom: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
