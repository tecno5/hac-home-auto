import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import UpcomingScreen from './src/screens/UpcomingScreen';
import CarScreen from './src/screens/CarScreen';
import HouseScreen from './src/screens/HouseScreen';
import LifeScreen from './src/screens/LifeScreen';

export default function App() {
  const [view, setView] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {view === 'login' && (
        <LoginScreen
          setView={setView}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
      {view === 'register' && <RegisterScreen setView={setView} />}
      {view === 'home' && <HomeScreen username={username} setView={setView} />}
      {view === 'profile' && (
        <ProfileScreen
          user={{
            firstName: 'Jake',
            lastName: 'Doe',
            email: 'john.doe@example.com',
          }}
          setView={setView}
        />
      )}
      {view === 'upcoming' && <UpcomingScreen setView={setView} />}
      {view === 'car' && <CarScreen setView={setView} />}
      {view === 'house' && <HouseScreen setView={setView} />}
      {view === 'life' && <LifeScreen setView={setView} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconButton: {
    width: '45%',
    padding: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 12,
  },
});
