import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import themes from '../config/themes';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Indicator from '../shared/components/Indicator';
const DetailsScreen = ({route}) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.footerContainer}>
            <View style={styles.timeContainer}>
              <IonicIcon name="time-outline" size={24} />
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredients}>{item.ingredients}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.downContainer}>
        <View style={styles.ingredientsDownContainer}>
          <Text style={styles.ingredientsTitle}>Malzemeler</Text>
          <Text style={styles.ingredientsText}>{item.A}</Text>
        </View>
        <Indicator />
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {item.steps.map((step, index) => {
            return (
              <View style={styles.steps} key={index}>
                <Text style={styles.stepTitle}>Adım {++index}</Text>
                <Text style={styles.stepDesc}>{Object.values(step)[0]}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 999,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: -40,
    backgroundColor: themes.white,
    padding: 10,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themes.black,
    marginTop: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
  },
  time: {
    fontSize: 14,
    marginLeft: 5,
    color: themes.gray,
  },
  ingredientsContainer: {
    marginLeft: 20,
  },
  ingredients: {
    fontSize: 14,
    marginLeft: 5,
    color: themes.gray,
  },
  downContainer: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flex: 1.6,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themes.textColor,
  },
  ingredientsText: {
    fontSize: 20,
    marginVertical: 10,
  },
  steps: {
    marginVertical: 10,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themes.mainColor,
  },
  stepDesc: {
    fontSize: 16,
  },
});
