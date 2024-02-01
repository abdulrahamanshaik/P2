import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useEffect, useState} from 'react';
import BlogItem from '../../../Components/BlogListItem';
import {useNavigation} from '@react-navigation/native';

import Profile from '../../../Components/Profile';
import {Context} from '../../../Components/ContextApi';
import {FlatGrid} from 'react-native-super-grid';

const BlogListing = ({route}) => {
  const {isDarkMode} = Context();

  const {url, title, isProfile = false, image, author} = route.params;
  console.log('checking image', image);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerStyle: {
        backgroundColor: isDarkMode ? '#222020' : '#fff',
      },
      headerTitleStyle: {
        color: isDarkMode ? '#fff' : '#000', // Set the title color
      },
      headerTintColor: isDarkMode ? '#fff' : '#000',
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData([result]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={[styles.view, isDarkMode && styles.view_darkmode]}>
      {!loading ? (
        // <FlatList
        //   ListHeaderComponent={() =>
        //     isProfile && (
        //       <Profile
        //         img={image ?? ''}
        //         name={author}
        //         backImg={data[0][0]?.acf?.blog_featured_image.url}
        //         totalPosts={data[0].length}
        //       />
        //     )
        //   }
        //   data={data[0]}
        //   renderItem={({item}) => <BlogItem blog={item} />}
        //   keyExtractor={item => item.id}
        // />
        <FlatGrid
          itemDimension={230}
          data={data[0]}
          renderItem={({item}) => <BlogItem blog={item} />}
          ListHeaderComponent={() =>
            isProfile && (
              <Profile
                img={image ?? ''}
                name={author}
                backImg={data[0][0]?.acf?.blog_featured_image.url}
                totalPosts={data[0].length}
              />
            )
          }
        />
      ) : (
        <ActivityIndicator size="large" color="#cc0404" />
      )}
    </View>
  );
};

export default BlogListing;

const styles = StyleSheet.create({
  view: {
    margin: 0,
    backgroundColor: '#e0dbdb',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  view_darkmode: {
    backgroundColor: '#000',
  },
});
