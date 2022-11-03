import {AsyncStorage} from 'react-native';
import axios from 'axios';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from '../../button';
import styled from 'styled-components';

const Connexion = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const submitForm = async () => {
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

  const HomeStyled = styled.Text`
    font-size: 50px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 40px;
  `;

  return (
    <View>
      <HomeStyled> Phama Home</HomeStyled>
      <View>
        <Text>Username</Text>
        <TextInput onChangeText={setUsername} value={username} />
        <Text>Password</Text>
        <TextInput onChangeText={setPassword} value={password} />
      </View>
      <TouchableOpacity onPress={submitForm}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <Text>To Categrories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListeMedicament')}>
        <Text>Med List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Connexion;
