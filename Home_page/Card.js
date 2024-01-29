import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({Title, Subtitle, Price, Color, onPress}) {
    const AddImage = () => {
        let source;
    
        if (Title === 'Apple Watch') {
          source = require('../assets/Pictures/Apple_watch.png');
        } else if (Title === 'Galaxy Watch') {
          source = require('../assets/Pictures/Galaxy_watch.png');
        } else if (Title === 'Mi Watch') {
          source = require('../assets/Pictures/Mi_watch.png');
        } else if (Title === 'Amazfit Bip U') {
          source = require('../assets/Pictures/Amazon.png');
        }
    
        return <Image source={source} />;
      };

    return (
      <View style={styles.container}>
        <View style={styles.frame_card}>
            <View style={styles.Card_content}>
              <View style={[styles.frame_color,{backgroundColor:Color}]}>
                <AddImage />
              </View>
              <Text style={styles.Title_card}>{Title}</Text>
              <Text style={styles.Subtitle_card}>{Subtitle}</Text>
              <Text style={styles.price}>{Price}</Text>
            </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  frame_card: {
    width: 157,
    height: 213,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  Card_content :{
    paddingTop : '5%',
    paddingHorizontal : '5%',
  },
  Title_card : {
    fontFamily: 'r_semibold',
    fontSize: 16,
    color : '#1B153D',
    paddingTop : 16,
  },
  Subtitle_card : {
    fontFamily: 'regular',
    fontSize: 12,
    color : '#9095A6',
    paddingTop : 8,
  },
  price : {
    fontFamily: 'poppins',
    fontSize: 16,
    color : '#5B41FF',
    paddingTop : 20,
  },
  frame_color: {
    width: 141,
    height: 101,
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
