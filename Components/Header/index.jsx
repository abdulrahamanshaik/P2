import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.view}>
      <View style={styles.logoView}>
        <Image
          style={styles.image}
          source={require('./../../Images/P2_Full_Logo.png')}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    paddingLeft: 10,
    // backgroundColor: '#e0dbdb',
  },
  logoView: {
    backgroundColor: 'transparent',
    height: 80,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '50%',
    width: '100%',
  },
});
