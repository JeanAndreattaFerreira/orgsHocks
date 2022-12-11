import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home  from './src/telas/home';

export default function App() {
  return <SafeAreaView style={estilos.safe}>
    <Home />
  </SafeAreaView> 
}

const estilos = StyleSheet.create({
  safe :{
    flex: 1,
  }
});