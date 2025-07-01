import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import BottomBar from './BottomBar';

const notifications = [
  {
    id: '1',
    name: 'dronavalli rakesh sai',
    date: '22 / 03 / 2025',
    from: 'FOUNDER OF VTC PEOPLE\'S GROUP, BANGALORE, INDIA.',
    to: 'THE MARKETING HOME\'S GROUP, HYDERABAD, TELANGANA, 500043.',
    encloses: 'ENCLSOES ....',
    type: 'mail',
  },
  // Add more notifications as needed
];

export default function NotificationScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(4);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>
            <MaterialCommunityIcons name="shield-check" size={14} color="green" /> {item.name}
          </Text>
        </View>
        <Feather name="mail" size={22} color="#222" />
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.dashedLine} />
      <View style={styles.details}>
        <Text style={styles.label}>FROM ,</Text>
        <Text style={styles.detailText}>{item.from}</Text>
        <Text style={styles.label}>TO ,</Text>
        <Text style={styles.detailText}>{item.to}</Text>
        <Text style={styles.encloses}>{item.encloses}</Text>
      </View>
      <View style={styles.footerRow}>
        <View style={styles.dots}>
          <Feather name="circle" size={8} color="#8BC34A" />
          <Feather name="circle" size={8} color="#8BC34A" />
          <Feather name="circle" size={8} color="#8BC34A" />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Look for @people's and #media"
            placeholderTextColor="#666"
          />
          <TouchableOpacity>
            <Ionicons name="mic" size={20} color="#0084ff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialCommunityIcons name="dots-horizontal" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 16 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchHeader: {
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 4,
  },
  menuButton: {
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#f7fafd',
    borderRadius: 18,
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 12,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 10,
    backgroundColor: '#789',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  date: {
    color: '#222',
    fontSize: 12,
    marginLeft: 8,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#bbb',
    marginVertical: 8,
  },
  details: {
    marginLeft: 66,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#222',
    marginTop: 2,
  },
  detailText: {
    fontSize: 11,
    color: '#222',
    marginBottom: 2,
  },
  encloses: {
    fontSize: 10,
    color: '#222',
    marginTop: 4,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 66,
    marginTop: 4,
    justifyContent: 'flex-end',
  },
  dots: {
    flexDirection: 'row',
    gap: 2,
  },
});