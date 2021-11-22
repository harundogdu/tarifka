import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, BackHandler} from 'react-native';
import themes from '../config/themes';
import SearchBox from '../shared/components/SearchBox';
import RecipePopular from '../shared/components/RecipePopular';
import TabRecipe from '../shared/components/TabRecipe';
import {useNavigation} from '@react-navigation/core';
import {useRecipes} from '../shared/context/RecipeContext';
/* Function */
const HomeScreen = () => {
  const navigation = useNavigation();
  const {recipes} = useRecipes();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleItemPress = item => {
    navigation.navigate('Details', {item});
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Ne pişirmek istersin?</Text>
      <View style={styles.searchContainer}>
        <SearchBox
          placeholder="Tarif ara..."
          value={searchQuery}
          clearText={() => setSearchQuery('')}
          onChangeText={query => setSearchQuery(query)}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainSubTitle}>En Popülerler</Text>
        <Text style={styles.subTitle}>Hepsini Gör</Text>
      </View>
      <View style={styles.recipesContainer}>
        <RecipePopular DATA={recipes} handleItemPress={handleItemPress} />
      </View>
      <View style={styles.recipesTabContainer}>
        <TabRecipe DATA={recipes} handleItemPress={handleItemPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: '500',
    color: themes.textColor,
  },
  searchContainer: {
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  mainSubTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
  },
  recipesTabContainer: {
    flex: 1,
  },
});

export default HomeScreen;
