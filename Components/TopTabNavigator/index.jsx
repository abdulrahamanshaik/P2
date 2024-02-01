import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();
import Categories from '../../src/screens/Categories';
import ContactUs from '../../src/screens/ContactUs';

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          size = focused ? 25 : 20;
          if (route.name === 'Home') {
            iconName = 'home'; // Add the appropriate icon name for 'Home'
          } else if (route.name === 'Settings') {
            iconName = 'settings'; // Add the appropriate icon name for 'Settings'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#cc0404',
      })}>
      <Tab.Screen name="Home" component={Categories} />
      <Tab.Screen name="Settings" component={ContactUs} />
    </Tab.Navigator>
  );
};

export default TopTabs;
