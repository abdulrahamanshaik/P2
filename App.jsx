import {StyleSheet, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {useState, createContext} from 'react';
import StackNavigator from './Components/StackNavigator';
import {ThemeProvider} from './Components/ContextApi';
// import HandleDeepLinking from './Components/HandleDeepLinking';
import React from 'react';

export const Context = createContext();
const App = () => {
  const [blogId, setBlogId] = useState();
  const blogs = {blogId, setBlogId};

  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('rgba(0,0,0,0.2)');

  return (
    <ThemeProvider blogs={blogs}>
      <NavigationContainer>
        {/* <HandleDeepLinking /> */}
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;

const styles = StyleSheet.create({});
