import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, Text} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';

const MedList = ({navigation}) => {
  const [meds, setMeds] = useState([]);
  useEffect(() => {
    getMeds();
  });
  const getMeds = async () => {
    axios({
      method: 'get',
      url: 'https://iterar-mapi-us.p.rapidapi.com/api/autocomplete',
      params: {query: 'res'},
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'iterar-mapi-us.p.rapidapi.com',
      },
    })
      .then(res => {
        console.log(res.data);
        setMeds(...meds, ...res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <Text> Il y a {meds.length} medicaments</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MedicamentPage')}>
        <Text>Medicaments</Text>
        <Text>{meds[0]}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MedList;
