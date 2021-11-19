import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import themes from '../../../config/themes';
import IonicIcon from 'react-native-vector-icons/Ionicons';
const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.timeContainer}>
          <IonicIcon name="time-outline" size={24} />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 1.7,
    justifyContent: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  image: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 150,
    width: '100%',
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  innerContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: themes.textColor,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  time: {
    fontSize: 14,
    marginLeft: 5,
    color: themes.gray,
  },
});

export default Card;
