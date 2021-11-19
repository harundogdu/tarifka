import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import themes from '../config/themes';
import SearchBox from '../shared/components/SearchBox';
import DATA from '../@fake_db/db.json';
import RecipePopular from '../shared/components/RecipePopular';
import TabRecipe from '../shared/components/TabRecipe';
/* Function */
const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
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
        <RecipePopular DATA={DATA} />
      </View>
      <View style={styles.recipesTabContainer}>
        <TabRecipe DATA={DATA} />
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
