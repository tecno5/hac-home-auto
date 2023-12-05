import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

function CarScreen({setView}) {
  const [maintenanceInfo, setMaintenanceInfo] = useState([
    {id: '1', text: 'Next Oil Change: 10,000 miles'},
    {id: '2', text: 'Tire Rotation: 12,000 miles'},
    {id: '3', text: 'Recall: XYZ123 - Brake Issue'},
    {id: '4', text: 'Insurance Renewal: 05/12/2023'},
    {id: '5', text: 'Accident Tips & Procedures'},
    {id: '6', text: 'Contact Authorized Mechanic'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Car Maintenance Info</Text>
      <FlatList
        data={maintenanceInfo}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.infoItem}>
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
  infoItem: {
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

export default CarScreen;
