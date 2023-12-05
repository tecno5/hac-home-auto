import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

function ProfileScreen({setView}) {
  // Dummy data
  const user = {
    firstName: 'Joseph',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../assets/images/profile_photo_default.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.info}>{user.firstName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.info}>{user.lastName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setView('home')}>
        <Text style={styles.buttonText}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#777',
    width: 110,
  },
  info: {
    fontSize: 18,
    color: '#D00000', // State Farm Red
  },
  button: {
    backgroundColor: '#D00000', // State Farm Red
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ProfileScreen;
