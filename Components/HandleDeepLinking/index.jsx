import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const HandleDeepLinking = () => {
  const {navigate} = useNavigation();
  const handleDynamicLinks = async link => {
    // console.log('Foreground link handling:', link);
    let BlogId = link.url.split('=').pop();
    // console.log('blogId:', BlogId);

    const response = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${BlogId}`,
    );
    const result = await response.json();
    navigate('DetailsScreen', {blog: result.blog});
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLinks);
    return () => unsubscribe();
  }, []);

  return null;
};

export default HandleDeepLinking;
