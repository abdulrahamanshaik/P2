import {TouchableOpacity, StyleSheet, Text, Share, View} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Context} from '../ContextApi';
import ThemeSwitch from '../ThemeSwitch';

const ShareButton = props => {
  const {blogId, setBlogId} = Context();

  const generateLink = async () => {
    try {
      const link = await dynamicLinks().buildShortLink(
        {
          link: `https://position2mobile.page.link/p2?blogId=${blogId}`,
          domainUriPrefix: 'https://position2mobile.page.link',
          android: {
            packageName: 'com.position2',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      // console.log('link:', link);
      return link;
    } catch (error) {
      // console.log('Generating Link Error:', error);
    }
  };

  const shareBlog = async () => {
    const getLink = await generateLink();
    try {
      Share.share({
        message: getLink,
      });
    } catch (error) {
      // console.log('Sharing Error:', error);
    }
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.container} onPress={shareBlog}>
        <Ionicons name="share" size={24} color="white" />
      </TouchableOpacity>
      <ThemeSwitch />
    </View>
  );
};

export default ShareButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
