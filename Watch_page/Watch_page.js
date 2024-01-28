import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import Card from './Card.js';

export default function Home_page() {

  return (
    <View style={styles.container}>
        <Text>Watch_page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'r_semibold',
    gap: 20,
    paddingTop : '25%',
    paddingHorizontal : '10%',
  },
});
