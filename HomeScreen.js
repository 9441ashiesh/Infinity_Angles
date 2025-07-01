import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons, FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import BottomBar from './BottomBar.js';


export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      {/* Top Bar */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#fff' }}>
        <View style={styles.topBar}>
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="infinity" size={32} color="#00363a" />
          </View>
          <TouchableOpacity style={styles.brandButton}>
            <MaterialCommunityIcons name="shield-check" size={18} color="#00b386" />
            <Text style={styles.brandText}>Infinity angles</Text>
            <MaterialCommunityIcons name="angle-right" size={16} color="#00363a" />
          </TouchableOpacity>
          <View style={styles.topIcons}>
            <Ionicons name="person-outline" size={28} color="#00363a" style={styles.icon} />
            <Feather name="shopping-cart" size={28} color="#00363a" style={styles.icon} />
            <Entypo name="dots-three-vertical" size={24} color="#00363a" style={styles.icon} />
          </View>
        </View>
      </SafeAreaView>
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 40 }}>This is the Home Page!</Text>
      </View>
      {/* Bottom Navigation */}
            <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    height: 80,
    marginTop: -70,
  },
  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#00363a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  brandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00363a',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 'auto',
    marginLeft: 2,
    backgroundColor: '#fff',
  },
  brandText: {
    color: '#00b3e6',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 4,
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 4,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 0,
    borderRadius: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 64,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  navItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  activeBar: {
    width: 32,
    height: 4,
    backgroundColor: '#a259ff',
    borderRadius: 2,
    marginTop: 2,
  },
});