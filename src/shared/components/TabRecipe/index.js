import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import themes from '../../../config/themes';
import TabCard from '../TabCard';

const TabRecipe = ({DATA, handleItemPress}) => {
  const [selected, setSelected] = React.useState(0);
  const tabs = ['Tüm Tarifler', 'Et Yemekleri', 'Çorbalar', 'Tatlılar'];
  return (
    <View style={styles.container}>
      <View style={styles.groupTitle}>
        {tabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[styles.tab, selected === index && styles.tabSelected]}
              onPress={() => setSelected(index)}>
              <Text
                style={[
                  styles.tabText,
                  selected === index && styles.tabTextSelected,
                ]}>
                {item}
              </Text>
              {selected === index ? (
                <View style={styles.line} />
              ) : (
                <View style={styles.notline} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.innerContainer}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <TabCard handleItemPress={handleItemPress} item={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  innerContainer: {
    flex: 1,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: themes.textColor,
    fontWeight: 'bold',
  },
  tabTextSelected: {
    color: themes.mainColor,
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: themes.mainColor,
    alignSelf: 'center',
  },
  notline: {
    width: 30,
    height: 2,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});

export default TabRecipe;
