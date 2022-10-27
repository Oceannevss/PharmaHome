import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/components/screens/home';
import Connexion from './src/components/connexion';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Home />
  );
};

export default App;
