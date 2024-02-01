import {FlatList, StyleSheet, ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Card, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../../Components/ContextApi';

const Category = () => {
  const {isDarkMode} = Context();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const onClick = (id, image, name) => {
    navigation.navigate('All Blog', {
      url: `https://dev-upgradep2.pantheonsite.io/wp-json/wp/v2/posts?per_page=100&author=${id}`,
      title: 'Author Profile',
      isProfile: true,
      image: image,
      author: name,
    });
  };

  const Item = ({id, title, image}) => (
    <TouchableRipple
      onPress={() => onClick(id, image, title)}
      style={[styles.item, isDarkMode && styles.item_darkmode]}>
      <Card.Title
        title={title}
        titleStyle={[isDarkMode && styles.title_darkmode]}
        // subtitle="Card Subtitle"
        left={props => (
          <Avatar.Image
            size={44}
            style={styles.avatar}
            source={{
              uri: `${image}`,
            }}
          />
        )}
      />
    </TouchableRipple>
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://dev-upgradep2.pantheonsite.io/wp-json/wp/v2/users?has_published_posts=post&per_page=100',
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={[styles.container, isDarkMode && styles.container_dark]}>
      {loading ? (
        <ActivityIndicator size="large" color="#cc0404" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item
              title={item.name}
              image={item.acf.author_image}
              id={item.id}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  container_dark: {
    backgroundColor: '#000',
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: ' rgba(83,85,95,.2)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_darkmode: {
    backgroundColor: '#222020',
  },
  avatar: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    color: '#000',
  },
  title_darkmode: {
    color: '#fff',
  },
});

export default Category;
