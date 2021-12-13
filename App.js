import React, { useState } from 'react';
import { Alert, Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import AddTodo from './app/components/AddTodo';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import TodoItem from './app/components/TodoItem';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy milk', key: 3 },
    { text: 'prepare coffee', key: 2 },
    { text: 'drink coffee', key: 1 }
  ])
  const swipeHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key !== key)
    })
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodo) => {
        return [
          { text: text, key: (todos.length > 0 ? (todos[0].key + 1) : 1) },
          ...prevTodo
        ]
      })
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
