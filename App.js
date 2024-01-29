import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Home_page from './Home_page/Home_page.js';
import Watch_page from './Watch_page/Watch_page.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/Fonts/Raleway-Regular.ttf'),
    r_bold: require('./assets/Fonts/Raleway-Bold.ttf'),
    r_semibold: require('./assets/Fonts/Raleway-SemiBold.ttf'),
    poppins: require('./assets/Fonts/Poppins-Medium.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Home_page />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'r_semibold',
  },
  title: {
    fontFamily: 'r_semibold',
    fontSize: 20,
  },
});
