import React from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import themes from '../../../config/themes';
import IonicIcons from 'react-native-vector-icons/Ionicons';

function TabBar({state, descriptors, navigation}) {
  const [keyboardState, setKeyboardState] = React.useState(true);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardState(false);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardState(true);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    keyboardState && (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: themes.mainColor,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center'}}
              key={index}>
              {route.name === 'Home' && (
                <>
                  <IonicIcons
                    name={isFocused ? 'ios-home' : 'ios-home-outline'}
                    size={22}
                    color={isFocused ? themes.white : themes.light}
                  />
                  <Text
                    style={{color: isFocused ? themes.white : themes.light}}>
                    {label}
                  </Text>
                </>
              )}
              {route.name === 'Add' && (
                <>
                  <IonicIcons
                    name={isFocused ? 'share' : 'share-outline'}
                    size={22}
                    color={themes.white}
                  />
                  <Text
                    style={{color: isFocused ? themes.white : themes.light}}>
                    {label}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    )
  );
}

export default TabBar;

const styles = StyleSheet.create({});
