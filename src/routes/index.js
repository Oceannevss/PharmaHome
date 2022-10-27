import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import Home from './src/components/screens/home';
import Categories from './src/components/categories';
import MedList from '/./src/components/screens/medList';
import Med from './src/components/screens/med';
const Stack = createNativeStackNavigator();

const Routes = () => {
  // {/* engloble l'app et envoi les props necessaire */}
  //   {/* on cree un navigator qui va servir les scree  */}
  //   {/* on cree des Screen qui vont servir les composants  */}
  //   {/* On essaye de garder la meme nomenclature d'ecriture pour le nom des pages*/}
  //   {/* -> "screenOptions" permet de suprimer le header*/}
  //   {/* -> "Dimensions" permet de recuperer les dimensions du telephone*/}
  //   {/*       -> a voire dans les imports*/}
  //   {/* */}

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="ListeMedicament" component={MedList} />
        <Stack.Screen name="MedicamentPage" component={Med}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
