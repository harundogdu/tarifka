import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import themes from '../../../config/themes';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const TabCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.timeContainer}>
          <IonicIcon name="time-outline" size={24} />
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.ingredients}>{item.ingredients}</Text>
      </View>
    </View>
  );
};

export default TabCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    borderRadius: 40,
    minHeight: 100,
    width: '40%',
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: themes.textColor,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    marginLeft: 5,
    color: themes.gray,
  },
  ingredients: {
    fontSize: 14,
    color: themes.gray,
    textAlign: 'right',
  },
});
