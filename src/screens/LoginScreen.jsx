import React from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

function LoginScreen({setView}) {
  const [username, setUsername] = React.useState(''); // <-- 1. Add local state for username
  const [password, setPassword] = React.useState(''); // <-- 2. Add local state for password

  const handleLogin = async () => {
    // const postData = {
    //   name: 'John Smith',
    // };

    // try {
    //   const result = await axios.post(
    //     'http://127.0.0.1:5000/add_user',
    //     postData,
    //   );
    //   console.log('POST result:', result.data);
    //   setView('home');
    // } catch (error) {
    //   console.error('There was an error sending data', error);
    // }
    setView('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please log in</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setView('register')}>
        <Text style={styles.linkText}>Register</Text>
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
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
    color: '#D00000', // State Farm Red
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#f5f5f5',
    marginBottom: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#D00000', // State Farm Red
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
