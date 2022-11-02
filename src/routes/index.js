import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Connexion from '../components/screens/connexion';
import Categories from '../components/screens/categories';
import MedList from '../components/screens/medList';
import Med from '../components/screens/med';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="ListeMedicament" component={MedList} />
        <Stack.Screen name="MedicamentPage" component={Med} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
