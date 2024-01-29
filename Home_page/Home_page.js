import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './Card.js';

export default function Home_page({navigation}) {

  const CardPress = (Title, Price) => {
    navigation.navigate('WatchPage', {Title, Price});
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Find your suitable watch now.</Text>
        <Text style={styles.subtitle}>Smart watch</Text>
        <TouchableOpacity onPress={CardPress}>
          <View style={{flexDirection:'column',gap: 30}}>
              <View style={styles.row}>
                  <Card Title='Apple Watch' Subtitle='Series 7' Price='$799' Color={'#FFC8B7'}
                  onPress={() => CardPress('Apple Watch Series 7', '$799')}/>
                  <View style={{paddingLeft : '55%'}}>
                      <Card Title='Galaxy Watch' Subtitle='Active 2' Price='$299' Color={'#FFEFE1'}/>
                  </View>
              </View>
              <View style={styles.row}>
                  <Card Title='Mi Watch' Subtitle='Revolve Active' Price='$79' Color={'#F0DEC5'}/>
                  <View style={{paddingLeft : '55%'}}>
                  <Card Title='Amazfit Bip U' Subtitle='Pro' Price='$69' Color={'#FCF1F0'}/>
                  </View>
              </View>
            </View>
          </TouchableOpacity>
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
