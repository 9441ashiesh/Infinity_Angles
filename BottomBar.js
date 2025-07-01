import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 5;


// Helper: map route name to tab index
const routeToTabIndex = {
  Home: 0,
  Loop: 1,
  eco: 2,
  message: 3,
  Notifications: 4,
};

export default function BottomBar({ activeTab, setActiveTab, navigation }) {
  const indicatorAnim = useRef(new Animated.Value(activeTab * TAB_WIDTH)).current;

  // Listen to navigation state and sync activeTab
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const route = navigation.getState().routes[navigation.getState().index];
      const tabIndex = routeToTabIndex[route.name];
      if (typeof tabIndex === 'number' && tabIndex !== activeTab) {
        setActiveTab(tabIndex);
      }
    });
    return unsubscribe;
  }, [navigation, activeTab, setActiveTab]);

  useEffect(() => {
    Animated.timing(indicatorAnim, {
      toValue: activeTab * TAB_WIDTH,
      duration: 0, // Adjust duration (ms) for smoothness
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [activeTab]);

  return (
    <View style={styles.container}>
      {/* Animated Indicator Bar */}
      <View style={styles.indicatorRow}>
        <Animated.View
          style={[
            styles.animatedIndicator,
            { left: indicatorAnim }
          ]}
        >
          <LinearGradient
            colors={['#f953c6', '#b91d73', '#5f2c82']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.indicator}
          />
        </Animated.View>
      </View>

      {/* Icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setActiveTab(0);
            navigation.navigate('Home');
          }}
        >
          <MaterialCommunityIcons
            name="home"
            size={32}
            color={activeTab === 0 ? '#2196F3' : '#bbb'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setActiveTab(1);
            navigation.navigate('Loop');
          }}
        >
          <MaterialCommunityIcons
            name="sitemap"
            size={32}
            color={activeTab === 1 ? '#8BC34A' : '#bbb'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setActiveTab(2);
            navigation.navigate('eco');
          }}
        >
          <MaterialCommunityIcons
            name="rotate-3d-variant"
            size={32}
            color={activeTab === 2 ? '#03a9f4' : '#bbb'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setActiveTab(3);
            navigation.navigate('message');
          }}
        >
          <Feather
            name="mail"
            size={32}
            color={activeTab === 3 ? '#222' : '#bbb'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setActiveTab(4);
            navigation.navigate('nofication');
          }}
        >
          <Feather
            name="bell"
            size={32}
            color={activeTab === 4 ? '#222' : '#bbb'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
    elevation: 10, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  indicatorRow: {
    height: 10,
    position: 'relative',
  },
  animatedIndicator: {
    position: 'absolute',
    top: 0,
    width: TAB_WIDTH,
    height: 6,
    zIndex: 1,
  },
  indicator: {
    width: TAB_WIDTH * 0.7,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
});

