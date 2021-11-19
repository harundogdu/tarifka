import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import themes from '../../../config/themes';

const Indicator = () => {
  return <View style={styles.container} />;
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: themes.gray,
  },
});
