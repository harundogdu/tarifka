import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filterRecipes = () => {
    if (searchQuery.length === 0) {
      return recipes;
    } else {
      return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
  };

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(recipes);
      await AsyncStorage.setItem('@recipes', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@recipes');
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue);
        setRecipes(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    filterRecipes();
  }, [searchQuery]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [recipes]);

  const contextValues = {
    recipes,
    setRecipes,
    storeData,
    getData,
    searchQuery,
    setSearchQuery,
    filterRecipes,
  };
  return (
    <RecipeContext.Provider value={contextValues}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
