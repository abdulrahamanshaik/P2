import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Category from '../Category/index.jsx';
import Author from '../Auther/index.jsx';
import {Context} from '../../../Components/ContextApi/index.jsx';

const Tab = createMaterialTopTabNavigator();
// tabBarStyle: {backgroundColor: isDarkMode ? '#000' : '#fff'},

const Categories = () => {
  const {isDarkMode} = Context();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff',
        },
        tabBarLabelStyle: {color: isDarkMode ? '#fff' : '#000'},
      }}>
      <Tab.Screen name="Categories" component={Category} />
      <Tab.Screen name="Authors" component={Author} />
    </Tab.Navigator>
  );
};

export default Categories;
