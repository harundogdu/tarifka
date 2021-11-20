import React, {createContext, useContext, useState} from 'react';
import DATA from '../../@fake_db/db.json';

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState(DATA);

  const contextValues = {
    recipes,
    setRecipes,
  };
  return (
    <RecipeContext.Provider value={contextValues}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
