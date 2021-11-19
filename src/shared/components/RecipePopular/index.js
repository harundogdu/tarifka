import React from 'react';
import {FlatList} from 'react-native';
import Card from '../Card';

const RecipePopular = ({DATA, handleItemPress}) => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Card handleItemPress={handleItemPress} item={item} key={item.id} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default RecipePopular;
