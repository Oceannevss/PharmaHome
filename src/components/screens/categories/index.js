import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

const Categories = () => {
  const UneCategorie = () => {
    return (
      <TouchableOpacity>
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
