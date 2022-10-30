import AsyncStorage from 'react-native';
import axios from 'axios';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../../button';
import {useNavigation} from '@react-navigation/native';

//const navigation = useNavigation();

const Connexion = ({navigation}) => {
  // creation des variable necessaire au login avec les useState
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // creation de la fonction qui vas envoyer les donnees a l'API
  const submitForm = () => {
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username,
        password,
      },
    })
      .then(async res => {
        console.log(res);
        await AsyncStorage.setItem('token', res.headers['x-access-token']);
        navigation.navigate('Categories');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <View>
        <Text>Username</Text>
        <TextInput onChangeText={setUsername} value={username} />
        <Text>Password</Text>
        <TextInput onChangeText={setPassword} value={password} />
      </View>
      <Button label="SUBMIT" onPress={submitForm} />
    </View>
  );
};

export default Connexion;
