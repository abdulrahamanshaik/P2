import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Image, Switch} from 'react-native';
import React from 'react';

import Blog from '../../src/screens/BlogDetails';
import CustomBackButton from '../../Components/BackButton';
import ShareButton from '../ShareButton.jsx/index.jsx';
import TabNavigator from '../../Components/TabNavigator';
import ThemeSwitch from '../ThemeSwitch';
import BlogListing from '../../src/screens/BlogListing';
import {Context} from '../ContextApi';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {isDarkMode} = Context();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkMode ? '#222020' : '#fff',
          },
          headerTitle: props => (
            <Image
              style={styles.image}
              source={require('../../Images/P2_Full_Logo.png')}
            />
          ),
          headerRight: () => <ThemeSwitch />,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={Blog}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
          title: '',
          headerLeft: () => <CustomBackButton />,
          headerRight: () => <ShareButton />,
        }}
      />
      <Stack.Screen
        name="All Blog"
        component={BlogListing}
        // options={{
        //   headerShown: false,
        //   headerTransparent: true,
        //   headerShadowVisible: false,
        //   title: '',
        //   headerLeft: () => <CustomBackButton />,
        //   headerRight: () => <ShareButton />,
        // }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  image: {
    height: 36,
    width: 90,
  },
});
