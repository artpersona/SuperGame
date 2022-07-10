import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__text}>Super Game</Text>
      </View>

      <View style={styles.image__container}>
        <Image
          source={require('./assets/playstore.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('http://dl.kabibegame.com/760728')}
        style={{width: '80%'}}>
        <LinearGradient
          colors={['#833d00', '#b45700', '#4f1a00']}
          // start={[0, 1]}
          // end={[1, 0]}
          style={styles.button}>
          <Text style={styles.button__text}>PLAY NOW</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#212121',
    width: '100%',
    height: 65,
    justifyContent: 'center',
  },
  header__text: {
    color: 'white',
    fontSize: RFValue(19),
    marginLeft: '5%',
    fontWeight: 'bold',
  },

  image__container: {
    width: deviceWidth / 1.3,
    height: deviceWidth / 1.3,
    marginTop: '10%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  button: {
    height: 80,
    backgroundColor: 'white',
    borderRadius: RFValue(10),
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button__text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: 'white',
  },
});
