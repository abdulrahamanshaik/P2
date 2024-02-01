import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Pressable,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

import {Context} from '../../../Components/ContextApi';
import {useEffect} from 'react';

const Blog = ({navigation, route}) => {
  const {blog, author} = route.params;

  const {blogId, setBlogId, isDarkMode} = Context();
  useEffect(() => {
    setBlogId(blog.id);
  }, []);

  const onClick = (id, image, name) => {
    navigation.navigate('All Blog', {
      url: `https://dev-upgradep2.pantheonsite.io/wp-json/wp/v2/posts?per_page=100&author=${id}`,
      title: 'Author Profile',
      isProfile: true,
      image: image,
      author: name,
    });
  };

  const formatDate = date => {
    const parsedDate = new Date(date);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    const formatted = parsedDate.toLocaleDateString('en-US', options);
    return formatted;
  };

  const {width} = useWindowDimensions();

  const style = isDarkMode ? DarkStyles : styles;
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#000',
    },
    a: {
      color: '#cc0404',
    },
  };
  const DarkTagStyles = {
    body: {
      color: '#fff',
    },
    a: {
      color: '#cc0404',
    },
  };

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{uri: blog.acf.blog_featured_image.url}}
      />
      <View style={style.view}>
        <Text style={[commonStyles.title, style.title]}>
          {blog.title.rendered}
        </Text>
        <Pressable
          style={styles.authorWrapper}
          onPress={() =>
            onClick(author.id, author.acf.author_image, author.name)
          }>
          <Image
            src={`${author.acf.author_image}`}
            style={styles.profile_img}
          />
          <Text style={isDarkMode ? DarkStyles.title : styles.title}>
            {author.name}
          </Text>
          <Text
            style={{
              ...(isDarkMode ? DarkStyles.title : styles.title),
              marginLeft: 'auto',
            }}>
            {formatDate(blog.date)}
          </Text>
        </Pressable>
        <RenderHtml
          source={{html: blog.acf.body}}
          contentWidth={width}
          tagsStyles={isDarkMode ? DarkTagStyles : tagsStyles}
        />
      </View>
    </ScrollView>
  );
};

export default Blog;

const commonStyles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

const styles = StyleSheet.create({
  title: {
    color: '#000',
  },
  view: {
    padding: 10,
    color: '#000',
  },
  image: {
    width: '100%',
    height: 250,
  },
  authorWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
  profile_img: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  blogBody: {
    color: '#000',
  },
});

const DarkStyles = StyleSheet.create({
  title: {
    color: '#fff',
  },
  view: {
    padding: 10,
    backgroundColor: '#000',
  },
  authorWrapper: {
    color: '#fff',
  },
});
