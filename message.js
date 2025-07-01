import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import BottomBar from "./BottomBar"
const messages = [
  {
    id: '1',
    name: 'dronavalli rakesh sai',
    message: 'I came home just now to see you all..',
    subMessage: 'Oh ! we all wnt out for shopping...',
    time: '11:30 AM',
  },
  {
    id: '2',
    name: 'dronavalli rakesh sai',
    message: 'I came home just now to see you all..',
    subMessage: 'Oh ! we all wnt out for shopping...',
    time: '11:30 AM',
  },
  {
    id: '3',
    name: 'dronavalli rakesh sai',
    message: 'I came home just now to see you all..',
    subMessage: 'Oh ! we all wnt out for shopping...',
    time: '11:30 AM',
  },
];

export default function MessageScreen({ navigation }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Search Bar and Dropdown */}
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for @people"
            placeholderTextColor="#b0bfc0"
          />
          <TouchableOpacity onPress={() => setDropdownVisible(true)} style={styles.menuIcon}>
            <MaterialIcons name="more-vert" size={28} color="#23607a" />
          </TouchableOpacity>
          <Modal
            transparent
            visible={dropdownVisible}
            animationType="fade"
            onRequestClose={() => setDropdownVisible(false)}
          >
            <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => setDropdownVisible(false)}>
                  <Text style={styles.dropdownItem}>Private</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDropdownVisible(false)}>
                  <Text style={styles.dropdownItem}>Public</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Modal>
        </View>

        {/* Message List */}
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View style={styles.cardRow}>
              <View style={styles.avatar} />
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Ionicons name="shield-checkmark" size={16} color="#4cd964" />
                  <Text style={styles.cardName}>{item.name}</Text>
                  <MaterialIcons name="push-pin" size={14} color="#e74c3c" style={{ marginLeft: 4 }} />
                  <Feather name="flag" size={14} color="#7f8c8d" style={{ marginLeft: 4 }} />
                  <Feather name="users" size={14} color="#3498db" style={{ marginLeft: 4 }} />
                </View>
                <View style={styles.cardMsgRow}>
                  <View style={styles.dot} />
                  <Text style={styles.cardMsg} numberOfLines={1}>{item.message}</Text>
                </View>
                <View style={styles.cardMsgRow}>
                  <Text style={styles.cardSubMsg} numberOfLines={1}>{item.subMessage}</Text>
                  <View style={styles.dot} />
                </View>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardFooterText}>Lₛ</Text>
                  <View style={styles.timeBox}>
                    <Text style={styles.timeText}>00:00:28 | 00:00 TM</Text>
                  </View>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            </View>
          )}
        />

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab}>
          <Feather name="edit-3" size={28} color="#23607a" />
        </TouchableOpacity>

        {/* Bottom Navigation */}
        <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#23607a',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: '#23607a',
    backgroundColor: '#f7fafd',
  },
  menuIcon: {
    marginLeft: 8,
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  
 
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#6c8ca1',
    marginRight: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#f7fafd',
    borderRadius: 18,
    padding: 10,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  cardName: {
    fontWeight: 'bold',
    color: '#23607a',
    marginLeft: 4,
    fontSize: 15,
  },
  cardMsgRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
    marginRight: 6,
  },
  cardMsg: {
    fontSize: 14,
    color: '#222',
    flex: 1,
  },
  cardSubMsg: {
    fontSize: 13,
    color: '#888',
    flex: 1,
    marginLeft: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  cardFooterText: {
    fontWeight: 'bold',
    color: '#23607a',
    marginRight: 6,
  },
  timeBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  timeText: {
    fontSize: 10,
    color: '#222',
  },
  time: {
    marginLeft: 'auto',
    fontSize: 13,
    color: '#888',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 24,
    backgroundColor: '#fff',
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
