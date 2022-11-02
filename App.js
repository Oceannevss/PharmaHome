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

import Routes from './src/routes';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <Routes />;
};

export default App;
