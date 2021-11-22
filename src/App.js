import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './shared/components/TabBar';
import {RecipeProvider} from './shared/context/RecipeContext';
/* screens */
import WelcomeScreen from './screens/WelcomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
}

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{title: 'Tarifler', headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Add"
        options={{title: 'Tarif Ekle'}}
        component={AddScreen}
      />
    </Tab.Navigator>
  );
}
