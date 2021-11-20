import React from 'react';
import {FlatList} from 'react-native';
import Card from '../Card';

const RecipePopular = ({DATA, handleItemPress}) => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({item}) => (
        <Card handleItemPress={handleItemPress} item={item} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default RecipePopular;
