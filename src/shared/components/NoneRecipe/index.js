import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const NoneRecipe = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={require('../../../assets/no-found.png')}
        resizeMode="contain"
        style={styles.image}>
        <Text style={styles.title}>Henüz Tarif Eklenmedi!</Text>
      </ImageBackground>
    </View>
  );
};

export default NoneRecipe;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#a0a0a0c0',
  },
});
