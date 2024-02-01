import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Text,
} from 'react-native';
import {useEffect, useState} from 'react';
import BlogItem from '../../../Components/BlogListItem';
import {Context} from '../../../Components/ContextApi';
import {FlatGrid} from 'react-native-super-grid';

// const screenWidth = Dimensions.get('window').width;

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load
  const [page, setPage] = useState(1);
  // const [numColumns, setNumColumns] = useState(
  //   Math.max(1, Math.floor(screenWidth / 400)),
  // );

  const {isDarkMode} = Context();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dev-upgradep2.pantheonsite.io/wp-json/wp/v2/posts?page=${page}`,
      );
      const result = await response.json();

      // Check if there's more data
      if (result.length > 0) {
        setData(prevData => [...prevData, ...result]);
        // setPage(page + 1);
      } else {
        setHasMore(false); // No more data to load
      }

      setLoading(false);
      // console.log(screenWidth / 400);
      // console.log(Math.max(1, Math.floor(screenWidth / 400)));
    };

    fetchData();
  }, [page]); // Only fetch data when the page state changes

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" color="#cc0404" /> : null;
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
  //   console.log('new', newScreenWidth);
  //   setNumColumns(Math.max(1, Math.floor(newScreenWidth / 400)));
  // };

  return (
    <View style={[styles.view, isDarkMode && styles.view_darkmode]}>
      {/* <FlatList
        key={numColumns}
        data={data}
        renderItem={({item}) => <BlogItem blog={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (hasMore) {
            setLoading(true);
            setPage(page + 1);
          }
        }}
        onEndReachedThreshold={0.1}
        numColumns={numColumns}
        ListFooterComponent={renderFooter}
        style={styles.list}
      /> */}
      <FlatGrid
        itemDimension={280}
        data={data}
        renderItem={({item}) => <BlogItem blog={item} />}
        onEndReached={() => {
          if (hasMore) {
            setLoading(true);
            setPage(page + 1);
          }
        }}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    // margin: 0,
    backgroundColor: '#e0dbdb',
    height: '100%',
    width: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  view_darkmode: {
    backgroundColor: '#000',
  },
});
