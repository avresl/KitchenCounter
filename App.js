//import { StatusBar } from 'expo-status-bar';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KitchenScreen from './app/KitchenScreen'
import GroceryListScreen from './app/GroceryListScreen'
import RecipesScreen from './app/RecipesScreen'
import CookingScreen from './app/CookingScreen'

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content'/>
      <Tab.Navigator initialRouteName='kitchen'>
        <Tab.Screen
          component={GroceryListScreen}
          name='grocery'
          options={{ title: 'Grocery List' }}
        />
        <Tab.Screen
          component={KitchenScreen}
          name='kitchen'
          options={{ title: 'Kitchen' }}
        />
        <Tab.Screen
          component={RecipesScreen}
          name='recipes'
          options={{ title: 'Recipes' }}
        />
        <Tab.Screen
          component={CookingScreen}
          name='cooking'
          options={{ title: 'Cooking' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
