import React from 'react';
import {Button, TextInput} from 'react-native';
import axios from 'axios';

function RegisterComponent() {
  const [name, setName] = React.useState(''); // Change fullName to name to match backend
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/add_user', {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        console.log(response.data.message); // e.g., "User John Smith added successfully!"
      }
    } catch (error) {
      console.error('There was an error registering the user:', error);
    }
  };

  return (
    <>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </>
  );
}

export default RegisterComponent;
