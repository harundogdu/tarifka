import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);

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
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [recipes]);

  const contextValues = {
    recipes,
    setRecipes,
    storeData,
    getData
  };
  return (
    <RecipeContext.Provider value={contextValues}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
