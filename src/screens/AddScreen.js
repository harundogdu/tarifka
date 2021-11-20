import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import AddRecipeCard from '../shared/components/AddRecipeCard';
import {useRecipes} from '../shared/context/RecipeContext';

const AddScreen = () => {
  const {recipes, setRecipes} = useRecipes();
  const navigation = useNavigation();

  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('');
  const [time, setTime] = React.useState('');
  const [ingredients, setIngredients] = React.useState('');
  const [ingredientsCount, setIngredientsCount] = React.useState('');
  const [steps, setSteps] = React.useState('');

  const handleClick = () => {
    if (
      title.length === 0 ||
      image.length === 0 ||
      time.length === 0 ||
      ingredients.length === 0 ||
      steps.length === 0 ||
      ingredientsCount.length === 0
    ) {
      alert('Lütfen boş alanları doldurunuz!');
      return;
    } else {
      setRecipes([
        ...recipes,
        {
          id: `_${Math.random(1000000)}_`,
          title,
          image,
          time,
          ingredients,
          ingredientsCount,
          steps,
        },
      ]);
      Alert.alert('Başarılı!', 'Tarif Başarıyla Eklendi!', [
        {
          text: 'Tamam',
          onPress: () => {
            setImage('');
            setTitle('');
            setTime('');
            setIngredients('');
            setSteps('');
            navigation.navigate('Home');
          },
        },
      ]);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <AddRecipeCard
          iconName="add-outline"
          text="Yemek Adı"
          value={title}
          onChangeText={setTitle}
        />
        <AddRecipeCard
          iconName="camera-outline"
          text="Fotoğraf"
          type="photo"
          value={image}
          onChangeText={setImage}
        />
        <AddRecipeCard
          iconName="time-outline"
          text="Zaman"
          value={time}
          onChangeText={setTime}
        />
        <AddRecipeCard
          iconName="restaurant-outline"
          text="Malzeme Adeti"
          value={ingredientsCount}
          onChangeText={setIngredientsCount}
          type="number"
        />
        <AddRecipeCard
          iconName="apps-outline"
          text="Malzemeler"
          type="input"
          value={ingredients}
          onChangeText={setIngredients}
        />
        <AddRecipeCard
          iconName="clipboard-outline"
          text="Adımlar"
          type="input"
          value={steps}
          onChangeText={setSteps}
        />
        <AddRecipeCard text="Kaydet" onPress={handleClick} type="save" />
      </View>
    </ScrollView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
