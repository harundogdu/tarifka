import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import themes from '../../../config/themes';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const AddRecipeCard = ({
  iconName = null,
  iconNameRight = null,
  text = null,
  onPress = null,
  type = 'text',
  value = null,
  onChangeText = null,
  disabled = false,
  deleteImagePress = null,
}) => {
  return type === 'save' ? (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.saveContainer}>
        <Text style={styles.text}>Tarifi Kaydet</Text>
      </View>
    </TouchableOpacity>
  ) : type === 'photo' ? (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.saveContainer}>
        <Text style={styles.text}>Fotoğraf Seç</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <View style={styles.buttonContainer}>
      <View style={styles.timeContainer}>
        {iconName && (
          <IonicIcons name={iconName} size={40} color={themes.red} />
        )}
        {type === 'photoText' && (
          <IonicIcons
            name={iconNameRight}
            size={40}
            color={themes.red}
            onPress={deleteImagePress}
          />
        )}

        {(type === 'text' ||
          type === 'input' ||
          type === 'photo' ||
          type === 'number' ||
          type === 'photoText') && (
          <TextInput
            placeholder={text}
            style={[
              styles.input,
              type === 'text' || type === 'number'
                ? styles.small
                : styles.medium,
            ]}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            multiline={true}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
          />
        )}
      </View>
    </View>
  );
};

export default AddRecipeCard;

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: themes.white,
    padding: 30,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themes.mainColor,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: themes.lightGray,
    color: themes.textColor,
  },
  small: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  medium: {
    height: 100,
    padding: 20,
  },
});
