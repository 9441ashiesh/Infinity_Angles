import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import BottomBar from './BottomBar'; // Adjust path if needed

const { width } = Dimensions.get('window');
const GRID_COLUMNS = 5;
const GRID_ROWS = 3;
const GRID_ITEM_SIZE = (width - 24 - (GRID_COLUMNS - 1) * 4) / GRID_COLUMNS; // 12px margin each side, 4px gap

const SIDEBAR_ITEMS = [
  "General", "Identification", "Thought", "Analysis", "Synthesis"
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SIDEBAR_WIDTH = 180;

const Grid = () => (
  <View style={styles.grid}>
    {[...Array(GRID_ROWS * GRID_COLUMNS)].map((_, i) => (
      <View key={i} style={styles.gridItem} />
    ))}
  </View>
);

const GridSection = ({ onBoxPress, navigation }) => (
  <View style={styles.gridSection}>
    {[...Array(4)].map((_, rowIdx) => (
      <View key={rowIdx} style={styles.gridRow}>
        {[...Array(5)].map((_, colIdx) => (
          <TouchableOpacity
            key={colIdx}
            style={styles.gridItem}
            onPress={() => navigation.navigate('loop2')}
          />
        ))}
      </View>
    ))}
  </View>
);

const Sidebar = ({ visible, onClose, selectedBox, animatedValue }) => (
  <>
    {visible && (
      <Pressable style={styles.overlay} onPress={onClose}>
        <Animated.View
          style={[
            styles.sidebar,
            { transform: [{ translateX: animatedValue }] }
          ]}
        >
          <Text style={styles.sidebarTitle}>Road Map</Text>
          <ScrollView>
            {SIDEBAR_ITEMS.map((item, idx) => (
              <Text
                key={item}
                style={[
                  styles.sidebarItem,
                  selectedBox % SIDEBAR_ITEMS.length === idx && styles.sidebarItemSelected
                ]}
              >
                {item}
              </Text>
            ))}
          </ScrollView>
        </Animated.View>
      </Pressable>
    )}
  </>
);

export default function LoopPage({ navigation }) {
  const [activeTab, setActiveTab] = useState(2); // 2 for the center/loop tab
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const animatedValue = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  const openSidebar = (boxIdx) => {
    setSelectedBox(boxIdx);
    setSidebarVisible(true);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(animatedValue, {
      toValue: -SIDEBAR_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSidebarVisible(false));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Sidebar
        visible={sidebarVisible}
        onClose={closeSidebar}
        selectedBox={selectedBox}
        animatedValue={animatedValue}
      />
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo name="menu" size={28} color="#1a5c5c" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              <Text style={{ color: '#1a5c5c' }}>L</Text>
              <Text style={{ color: '#1a5c5c' }}>O</Text>
              <Text style={{ color: '#1a5c5c' }}>O</Text>
              <Text style={{ color: '#1a5c5c' }}>P</Text>
              <Text style={{ color: '#1a5c5c' }}>S</Text>
            </Text>
            <Text style={styles.subtitle}>INVENTION METHODOLOGIES - INNOVATIONS</Text>
          </View>
          <View style={styles.checkIconContainer}>
            <Ionicons name="checkmark-circle" size={28} color="#4cd964" style={styles.checkIcon} />
          </View>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>SOCIOECONOMICS THEORIZATION AND DEVELOPMENTS</Text>

        {/* Scrollable Grids */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <GridSection navigation={navigation} />
          <GridSection navigation={navigation} />
        </ScrollView>
      </View>
      {/* Bottom Navigation */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7fafd' },
  content: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
  },
  logoContainer: { alignItems: 'center', flex: 1 },
  logoText: { fontSize: 28, fontWeight: 'bold', letterSpacing: 2 },
  subtitle: { fontSize: 10, fontWeight: '600', marginTop: -4 },
  checkIconContainer: { marginLeft: 8 },
  checkIcon: { borderWidth: 2, borderColor: '#ffe600', borderRadius: 20, backgroundColor: '#fff' },
  scrollContent: {
    paddingBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 12,
    marginBottom: 10,
    justifyContent: 'center',
  },
  gridItem: {
    backgroundColor: '#7ba6ad',
    flex: 1,
    aspectRatio: 1,
    margin: 2,
    borderRadius: 4,
  },
  gridSection: { marginVertical: 8 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 10,
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: '#dbe9ea',
    padding: 8,
    height: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    elevation: 5,
    zIndex: 20,
  },
  sidebarTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#7ba6ad',
    fontSize: 16,
  },
  sidebarItem: {
    paddingVertical: 4,
    color: '#1a5c5c',
    fontSize: 13,
  },
  sidebarItemSelected: {
    backgroundColor: '#b2d8d8',
    fontWeight: 'bold',
    borderRadius: 4,
  },
});