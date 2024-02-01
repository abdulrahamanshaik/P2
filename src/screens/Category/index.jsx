import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

import {useEffect, useState} from 'react';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../../Components/ContextApi';
import {FlatGrid} from 'react-native-super-grid';

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {isDarkMode} = Context();

  const navigation = useNavigation();
  const onClick = (id, title) => {
    navigation.navigate('All Blog', {
      url: `https://dev-upgradep2.pantheonsite.io/wp-json/wp/v2/posts?categories=${id}&per_page=100`,
      title: title,
    });
  };

  const Item = ({title, id}) => (
    <TouchableRipple
      onPress={() => onClick(id, title)}
      style={[styles.item, isDarkMode && styles.itemContent_darkmode]}>
      <View style={styles.itemContent}>
        <Avatar.Text size={44} label={title[0]} style={styles.itemIcon} />
        <Text style={[styles.title, isDarkMode && styles.title_darkmode]}>
          {title}
        </Text>
      </View>
    </TouchableRipple>
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://dev-upgradep2.pantheonsite.io/wp-json/wp/v2/categories?per_page=100',
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={[styles.container, isDarkMode && styles.item_darkmode]}>
      {loading ? (
        <ActivityIndicator size="large" color="#cc0404" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Item title={item.name} id={item.id} />}
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
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: ' rgba(83,85,95,.2)',
  },
  item_darkmode: {
    backgroundColor: '#000',
  },
  itemContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContent_darkmode: {
    backgroundColor: '#222020',
  },
  itemIcon: {
    backgroundColor: '#cc0404',
    marginRight: 12,
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
