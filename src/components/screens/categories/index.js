import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

const Categories = ({navigation}) => {
  const UneCategorie = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ListeMedicament')}>
        <Text>Une Categories</Text>
      </TouchableOpacity>
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
