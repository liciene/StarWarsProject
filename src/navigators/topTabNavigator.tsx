import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../screens/home';
import Favorites from '../screens/favorites';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#EDB166',
          tabBarContentContainerStyle: {backgroundColor: '#29282C'},
          tabBarPressColor: '#C97965',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
        name="Principais Personagens"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#EDB166',
          tabBarContentContainerStyle: {backgroundColor: '#29282C'},
          tabBarPressColor: '#C97965',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
        name="Favoritos"
        component={Favorites}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
