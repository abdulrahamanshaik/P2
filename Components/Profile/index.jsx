import React from 'react';
import {View, Image, Text} from 'react-native';

const UIUserProfile = ({img, name, backImg, totalPosts}) => {
  const styles = {
    userProfileTop: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 120,
      minHeight: 380,
    },
    userProfileTopBg: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: null,
      height: null,
    },
    userProfileTopOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: null,
      height: null,
      backgroundColor: '#000000',
      opacity: 0.6,
    },
    avatar: {
      flexShrink: 0,
      width: 128,
      height: 128,
    },
    avatarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderRadius: 64,
      backgroundColor: '#a8bac1',
      overflow: 'hidden',
    },
    avatarImg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    avatarStatus: {
      position: 'absolute',
      right: 10.1,
      bottom: 10.1,
      width: 20,
      height: 20,
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderRadius: 10,
      backgroundColor: '#67ab5b',
    },
    userProfileInfo: {
      paddingHorizontal: 24,
    },
    userProfileInfoName: {
      marginTop: 16,
      color: '#ffffff',
      fontSize: 22,
      textAlign: 'center',
    },
    userProfileInfoJobTitle: {
      marginTop: 4,
      color: '#ffffff',
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.7,
    },
    userProfileWidget: {
      alignSelf: 'stretch',
      margin: 24,
      marginTop: 24,
      marginBottom: 24,
    },
    widget: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 8,
      paddingVertical: 8,
      minHeight: 60,
    },
    widgetItem: {
      flex: 1,
      justifyContent: 'center',
      minWidth: 0,
      paddingVertical: 4,
      borderRightWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    widgetItemLast: {
      borderRightWidth: 0,
    },
    widgetItemLabel: {
      color: '#ffffff',
      fontSize: 14,
      textAlign: 'center',
    },
    widgetItemValue: {
      marginTop: 4,
      color: '#ffffff',
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.9,
    },
    blogText: {
      fontSize: 26,
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 10,
    },
  };

  return (
    <View style={styles.flexA}>
      <View style={styles.userProfile}>
        <View style={styles.userProfileTop}>
          <Image
            style={styles.userProfileTopBg}
            source={{
              uri: backImg,
            }}
          />
          <View style={styles.userProfileTopOverlay} />
          <View style={styles.avatar}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarImg}
                source={{
                  uri: img,
                }}
              />
            </View>
          </View>
          <View style={styles.userProfileInfo}>
            <Text style={styles.userProfileInfoName}>{name}</Text>
            {/* <Text style={styles.userProfileInfoJobTitle}>Graphic designer</Text> */}
          </View>
          <View style={[styles.userProfileWidget, styles.widget]}>
            <View style={styles.widgetItem}>
              <Text style={styles.widgetItemLabel}>Blogs</Text>
              <Text style={styles.widgetItemValue}>{totalPosts}</Text>
            </View>

            {/* <View style={[styles.widgetItem, styles.widgetItemLast]}>
              <Text style={styles.widgetItemLabel}>FOLLOWERS</Text>
              <Text style={styles.widgetItemValue}>356</Text>
            </View> */}
          </View>
        </View>
        <Text style={styles.blogText}>
          {totalPosts > 0 ? 'All Blogs' : 'No Blog Posts'}
        </Text>
      </View>
    </View>
  );
};

export default UIUserProfile;
