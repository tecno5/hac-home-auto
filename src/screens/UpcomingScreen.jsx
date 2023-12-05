import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

function UpcomingScreen({setView}) {
  const [todos, setTodos] = useState([
    {id: '1', text: 'Buy groceries'},
    {id: '2', text: 'Call mom'},
    {id: '3', text: 'Finish report'},
    // Add more todos here...
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => setView('home')}>
        <Text style={styles.buttonText}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  todoItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#667EEA',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default UpcomingScreen;
