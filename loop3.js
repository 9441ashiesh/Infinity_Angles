import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomBar from './BottomBar.js';
import { useNavigation } from '@react-navigation/native';

export default function Loop3() {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.logo}>
          <Text style={{ color: '#1A73E8' }}>L</Text>
          <Text style={{ color: '#222' }}>O</Text>
          <Text style={{ color: '#1A73E8' }}>O</Text>
          <Text style={{ color: '#222' }}>PS</Text>
        </Text>
        <Icon name="verified-user" size={28} color="#4CAF50" />
      </View>
      <Text style={styles.subtitle}>INVENTION METHODOLOGIES - INNOVATIONS</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['General', 'Identification', 'Thought', 'Research', 'St'].map((tab, idx) => (
          <Text
            key={tab}
            style={[styles.tab, idx === activeTab && styles.activeTab]}
            onPress={() => setActiveTab(idx)}
          >
            {tab}
          </Text>
        ))}
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* User Post */}
        <View style={styles.post}>
          <View style={styles.userRow}>
            <Image
              source={{ uri: 'https://ui-avatars.com/api/?name=Venkatesh+Mada' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>Venkatesh Mada</Text>
              <Text style={styles.time}>Magazine editor · 5 min ago</Text>
            </View>
          </View>
          {/* Above sector: description text */}
          <Text style={styles.postDescription}>
            Millions of designers, engineers, and businesses around the world trust SOLIDWORKS to provide powerful, yet easy-to-use 2D and 3D product development solutions.
          </Text>
          <Image
            source={{ uri: 'https://i.imgur.com/your-imarge.png' }} // Replace with your image URL
            style={styles.postImage}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Row above BottomBar */}
        <View style={styles.bottomRow}>
          <View style={styles.bottomIcon}>
            <Icon name="person" size={28} color="#21838e" />
            <Text style={styles.bottomLabel}>People</Text>
          </View>
          <View style={styles.bottomIcon}>
            <Icon name="edit" size={28} color="#21838e" />
            <Text style={styles.bottomLabel}>Corrections</Text>
          </View>
          <View style={styles.bottomIcon}>
            <Icon name="all-inclusive" size={28} color="#21838e" />
            <Text style={styles.bottomLabel}>Tangles</Text>
          </View>
          <View style={styles.bottomIcon}>
            <Icon name="lightbulb-outline" size={28} color="#21838e" />
            <Text style={styles.bottomLabel}>Suggestions</Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>2:45 PM</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingBottom: 60 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
  },
  logo: { fontSize: 28, fontWeight: 'bold', letterSpacing: 2 },
  subtitle: { textAlign: 'center', fontSize: 12, color: '#222', marginBottom: 8 },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 8,
  },
  tab: { padding: 12, color: '#888', fontWeight: '500' },
  activeTab: { color: '#21838e', borderBottomWidth: 2, borderColor: '#21838e' },
  content: { flex: 1, padding: 16 },
  post: { marginBottom: 16 },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: { width: 32, height: 32, borderRadius: 16, marginRight: 8 },
  username: { fontWeight: 'bold', fontSize: 14 },
  time: { fontSize: 10, color: '#888' },
  postDescription: {
    fontSize: 13,
    color: '#222',
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
  },
  postImage: { width: '100%', height: 180, borderRadius: 8, backgroundColor: '#eee' },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  bottomIcon: { alignItems: 'center' },
  bottomLabel: { fontSize: 10, color: '#888', marginHorizontal: 4 },
  timeBox: {
    borderWidth: 1,
    borderColor: '#21838e',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
  },
  timeText: { color: '#21838e', fontWeight: 'bold' },
});