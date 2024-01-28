import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import Card from './Card.js';

export default function Home_page() {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Find your suitable watch now.</Text>
        <Text style={styles.subtitle}>Smart watch</Text>
        <View style={{flexDirection:'column',gap: 30}}>
            <View style={styles.row}>
                <Card Title='Apple Watch' Subtitle='Series 7' Price='$799' Color={'#FFC8B7'} Image={[require=('../assets/Pictures/Watch.png')]}/>
                <View style={{paddingLeft : '55%'}}>
                    <Card Title='Galaxy Watch' Subtitle='Active 2' Price='$299' Color={'#FFEFE1'} Image={[require=('../assets/Pictures/Galaxy_watch.png')]}/>
                </View>
            </View>
            <View style={styles.row}>
                <Card Title='Mi Watch' Subtitle='Revolve Active' Price='$79' Color={'#F0DEC5'} Image={[require=('../assets/Pictures/Mi_watch.png')]}/>
                <View style={{paddingLeft : '55%'}}>
                <Card Title='Amazfit Bip U' Subtitle='Pro' Price='$69' Color={'#FCF1F0'} Image={[require=('../assets/Pictures/Amazon.png')]}/>
                </View>
            </View>
        </View>
        <StatusBar style="auto" />
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
  title: {
    fontFamily: 'r_bold',
    fontSize: 36,
    color: '#1B153D'
  },
  subtitle: {
    fontFamily: 'r_semibold',
    fontSize: 20,
    color : '#5B41FF'
  },
  row: {
    display :'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap : 10,
  },
});
