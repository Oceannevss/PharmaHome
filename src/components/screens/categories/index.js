import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import FlashMessage from 'react-native-flash-message';
//<FlashMessage position="top" message="Voici la page categories" />

const Categories = ({navigation}) => {
  const UneCategorie = () => {
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate('ListeMedicament')}>
          <Text>Une Categories</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView>
      <Text>Categories Page</Text>
      <UneCategorie />
    </SafeAreaView>
  );
};

export default Categories;
