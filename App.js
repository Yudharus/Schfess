import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import User from './src/components/User';
import Diskusi from './src/components/Diskusi';
import Event from './src/components/Event';
import Features from './src/components/Features';
import Artikel from './src/components/Artikel';
import Menu from './src/components/Menu';;

const App = () => {
  return (
    <ScrollView style={{backgroundColor: '#F9F9F9',}}>
        <User /> 
      <Diskusi />
       <Event /> 
      <Features />
      <Artikel /> 
      <Menu /> 
    </ScrollView>
  );
};

export default App;
