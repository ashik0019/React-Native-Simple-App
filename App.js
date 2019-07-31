/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Header from './src/Components/Header'
import AlbumList from './src/Components/AlbumList'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <View style={{ flex:1 }}>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
