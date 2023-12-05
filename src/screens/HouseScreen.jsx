import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

function HouseScreen({setView}) {
  const maintenanceInfo = [
    {
      id: '1',
      title: 'Seasonal Inspections',
      task: 'Prepare for upcoming season',
    },
    {id: '2', title: 'HVAC', task: 'Change filters'},
    {
      id: '3',
      title: 'Roof & Gutters',
      task: 'Check for damages and clean blockages',
    },
    {
      id: '4',
      title: 'Safety Checks',
      task: 'Test smoke alarms and CO detectors',
    },
    {id: '5', title: 'Plumbing', task: 'Check for leaks and clean drains'},
    {
      id: '6',
      title: 'Electrical Systems',
      task: 'Inspect main panel and outlets',
    },
    {id: '7', title: 'Landscaping', task: 'Prune trees and fertilize lawn'},
    {id: '8', title: 'Pest Control', task: 'Schedule annual inspection'},
  ];

  const renderTask = (title, task) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskDescription}>✓ {task}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Maintenance Info</Text>
      <FlatList
        data={maintenanceInfo}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderTask(item.title, item.task)}
        numColumns={2}
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
    paddingHorizontal: 10,
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
  taskItem: {
    borderWidth: 1,
    borderColor: '#D00000',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#FFE6E6',
    marginBottom: 15,
    flex: 0.5,
    marginHorizontal: 5,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
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

export default HouseScreen;
