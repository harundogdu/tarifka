import React from 'react';
import {FlatList} from 'react-native';
import Card from '../Card';

const RecipePopular = ({DATA}) => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Card item={item} key={item.id} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default RecipePopular;
