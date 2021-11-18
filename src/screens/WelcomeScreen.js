import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import themes from '../config/themes';

const WelcomeScreen = ({navigation}) => {
  const handlePress = () => navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={themes.mainColor} />
      <Image
        source={require('../assets/banner.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.groupTitle}>
        <Text style={styles.text}>Yemek yapma sanatı,</Text>
        <Text style={styles.text}>Hayatınızı kolaylaştırır.</Text>
      </View>
      <View style={styles.groupIndicator}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.moved]} />
      </View>
      <TouchableOpacity style={styles.nextGroup} onPress={handlePress}>
        <View style={styles.buttonNext}>
          <Ionicons name="arrow-forward-outline" style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  groupTitle: {
    marginVertical: '15%',
  },
  text: {
    color: themes.textColor,
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '400',
    textAlign: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    backgroundColor: themes.mainColor,
    borderRadius: 8,
    marginHorizontal: 3,
  },
  groupIndicator: {
    flexDirection: 'row',
  },
  moved: {
    width: 12,
    backgroundColor: themes.mainColor,
  },
  buttonNext: {
    width: 60,
    height: 60,
    backgroundColor: themes.mainColor,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: themes.white,
  },
  nextGroup: {
    position: 'absolute',
    bottom: 55,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: themes.mainColor,
    borderRadius: 100,
  },
  icon: {
    fontSize: 30,
    color: themes.white,
  },
});

export default WelcomeScreen;
