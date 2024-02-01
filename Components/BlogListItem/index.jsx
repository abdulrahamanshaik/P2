import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  // Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Context} from '../ContextApi';

// type ItemProps = {blog: any};

const BlogItem = ({blog}) => {
  const {isDarkMode} = Context();

  const [autherData, setAuthorData] = useState({});
  // const [screenWidth, setScreenWidth] = useState(
  //   Dimensions.get('window').width,
  // );

  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('DetailsScreen', {blog: blog, author: autherData});
  };
  // console.log('console starts here', blog.id);

  useEffect(() => {
    const fetchAutherData = async () => {
      const response = await fetch(blog._links.author[0].href);
      const result = await response.json();
      setAuthorData(result);
      // console.log(result.name);
    };
    fetchAutherData();
  }, []);

  const formatDate = date => {
    const parsedDate = new Date(date);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formatted = parsedDate.toLocaleDateString('en-US', options);
    return formatted;
  };

  // useEffect(() => {
  //   // Add an event listener to update screen size when the orientation changes
  //   Dimensions.addEventListener('change', updateScreenSize);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     Dimensions.removeEventListener('change', updateScreenSize);
  //   };
  // }, []);

  // const updateScreenSize = () => {
  //   const newScreenWidth = Dimensions.get('window').width;
  //   setScreenWidth(newScreenWidth);
  // };

  return (
    <TouchableOpacity
      style={[
        styles.item,
        isDarkMode && styles.item_darkmode,
        // {width: screenWidth < 400 ? '95%' : 380},
      ]}
      onPress={onClick}>
      <Image
        style={styles.image}
        source={{uri: blog.acf?.blog_featured_image.url}}
      />
      <View style={styles.details}>
        <Text style={[styles.date, isDarkMode && styles.text_darkmode]}>
          {formatDate(blog.date)}
        </Text>
        <Text
          numberOfLines={2}
          style={[styles.text, isDarkMode && styles.text_darkmode]}>
          {blog.title.rendered}
        </Text>
        <Text style={{fontSize: 18, color: isDarkMode ? '#fff' : '#000'}}>
          By{' '}
          <Text
            style={{
              ...(isDarkMode && styles.text_darkmode),
              fontWeight: '600',
            }}>
            {autherData && autherData.name}
          </Text>
        </Text>
        <View style={styles.readmore}>
          <Text
            style={[styles.readmoretext, isDarkMode && styles.text_darkmode]}>
            Read More
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: ' rgba(83,85,95,.2)',
    overflow: 'hidden',
    // width: screenWidth < 400 ? '95%' : 380,
    // maxWidth: 380,
    width: '98%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  item_darkmode: {
    borderColor: ' rgba(172, 173, 177, 0.2)0.2)',
    backgroundColor: '#222020',
  },
  image: {
    // width: '100%',
    height: 200,
    objectFit: 'fill',
  },
  details: {
    margin: 10,
  },
  date: {
    color: '#53555f',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 10,
  },
  readmore: {
    borderWidth: 1,
    borderColor: '#53555f',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  readmoretext: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  text_darkmode: {
    color: '#fff',
  },
});
