import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../src/screens/Home';
import Categories from '../../src/screens/Categories';
import ContactUs from '../../src/screens/ContactUs';
import {Context} from '../ContextApi';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {isDarkMode} = Context();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          size = focused ? 25 : 20;
          if (route.name === 'Latest') {
            iconName = 'timer';
          } else if (route.name === 'Category') {
            iconName = 'planet';
          } else if (route.name === 'Contact Us') {
            iconName = 'call';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#cc0404',
        tabBarStyle: {backgroundColor: isDarkMode ? '#000' : '#fff'},
      })}>
      <Tab.Screen
        name="Latest"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Category"
        component={Categories}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Contact Us"
        component={ContactUs}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
