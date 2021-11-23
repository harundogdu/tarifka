import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Alert, ScrollView, StyleSheet, View, Text} from 'react-native';
import AddRecipeCard from '../shared/components/AddRecipeCard';
import {useRecipes} from '../shared/context/RecipeContext';
import {launchImageLibrary} from 'react-native-image-picker';

const AddScreen = () => {
  const {recipes, setRecipes, storeData} = useRecipes();
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
      const newRecipe = {
        id: `_${Math.random(1000000)}_`,
        title,
        image,
        time,
        ingredients,
        ingredientsCount,
        steps,
      };
      setRecipes([...recipes, newRecipe]);
      Alert.alert('Başarılı!', 'Tarif Başarıyla Eklendi!', [
        {
          text: 'Tamam',
          onPress: () => {
            setImage('');
            setTitle('');
            setTime('');
            setIngredients('');
            setIngredientsCount('');
            setSteps('');
            navigation.navigate('Home');
          },
        },
      ]);
    }
  };

  const handleImage = async () => {
    const options = {
      title: 'Fotoğraf Seç',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImage(response.assets[0].uri);
      }
    });
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
        {image ? (
          <AddRecipeCard
            iconNameRight="checkmark-outline"
            text="Fotoğraf"
            type="photoText"
            value={image}
            onChangeText={setImage}
            disabled
            deleteImagePress={() => setImage('')}
          />
        ) : (
          <AddRecipeCard text="Fotoğraf" onPress={handleImage} type="photo" />
        )}
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
