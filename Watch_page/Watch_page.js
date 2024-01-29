import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function Watch_page(Title, Price) {
    const AddImage = () => {
        let source;
    
        if (Title === 'Apple Watch Series 7') {
          source = require('../assets/Pictures/Big_apple_watch.png');
        } else if (Title === 'Galaxy Watch Series 4') {
          source = require('../assets/Pictures/Big_galaxy.png');
        } else if (Title === 'Mi Watch All Series') {
          source = require('../assets/Pictures/Big_Mi.png');
        } else if (Title === 'Amazfit Bip U Pro Series') {
          source = require('../assets/Pictures/Big_Amazon.png');
        }
    
        return <Image source={source} />;
      };


  return (
    <View style={styles.container}>
        <Image source={require('../assets/Pictures/Arrow.png')} style={styles.Arrow} />
        <Image source={require('../assets/Pictures/Big_apple_watch.png')} style={styles.Watch_picture} />
        <View style={styles.description_container}>
            <View style={styles.row}>
                <View style={styles.title_subtitle}>
                    <Text style={styles.title}>Apple Watch Series 7</Text>
                    <Text style={styles.subtitle}>(With solo loop)</Text>
                </View>
                <Text style={styles.price}>$799</Text>
            </View>
            <Text style={styles.description}>The aluminium case is lightweight and made from 100 percent recycled aerospace grade alloy.</Text>
            <View style={styles.add_to_card}>
                <Text style={styles.add_to_card_police}>Add to card</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : '100%',
    backgroundColor: '#FCFCFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'r_semibold',
    paddingTop : '15%',
    gap : 10,
  },
  Arrow : {
    width : 25,
    height : 25,
    position : 'absolute',
    top : '10%',
    left : '10%',
  },
  Watch_picture : {
    width : 311,
    height : 311,
    justifyContent : 'center',
    alignItems : 'center',
  },
  white_background : {
    width : '100%',
    height : '100%',
    backgroundColor : '#FFFFFF',
  },
  description_container : {
    width : '90%',
  },

  row : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  title_subtitle : {
    flexDirection : 'column',
  },
  title : {
    fontFamily: 'r_bold',
    fontSize: 20,
    paddingVertical : '2%',
    color : '#1B153D',
  },
  subtitle : {
    fontFamily: 'regular',
    fontSize: 12,
    color : '#9095A6',
  },
  price : {
    fontFamily: 'poppins',
    fontSize: 24,
    color : '#5B41FF',
  },
  description : {
    fontFamily: 'regular',
    fontSize: 14,
    color : '#9095A6',
    paddingVertical : '5%',
    paddingBottom : '50%',
  },
  add_to_card : {
    width : '100%',
    height : 70,
    backgroundColor : '#8743FF',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
  },
  add_to_card_police : {
    color : '#FFFFFF',
    fontFamily: 'r_bold',
    fontSize: 20,
  },
});
