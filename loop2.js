import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomBar from './BottomBar.js';

const roadMapItems = [
  'Introduction',
  'Step 1',
  'Step 2',
  'Step 3',
  'Step 4',
  'Step 5',
  // ...add more as needed
];

const gridRows = 5;
const gridCols = 3;
const gridHeaders = ['General', 'Identification', 'Thought'];

export default function App({ navigation }) {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={28} color="#2b4d4d" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>L<Text style={{ color: '#2b4dff' }}>O</Text>OPS</Text>
          <Text style={styles.subtitle}>INVENTION METHODOLOGIES - INNOVATIONS</Text>
        </View>
        <Icon name="verified-user" size={32} color="#4cd964" />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Road Map Sidebar */}
        <View style={styles.roadMap}>
          <Text style={styles.roadMapTitle}>Road Map</Text>
          <ScrollView>
            {roadMapItems.map((item, idx) => (
              <Text key={idx} style={styles.roadMapItem}>{item}</Text>
            ))}
          </ScrollView>
        </View>

        {/* Grid */}
        <View style={styles.gridSection}>
          {/* Grid Headers */}
          <View style={styles.gridHeaderRow}>
            {gridHeaders.map((header, idx) => (
              <Text key={idx} style={styles.gridHeader}>{header}</Text>
            ))}
          </View>
          {/* Grid Cells */}
          <View style={styles.gridBody}>
            {[...Array(gridRows)].map((_, rowIdx) => (
              <View key={rowIdx} style={styles.gridRow}>
                {[...Array(gridCols)].map((_, colIdx) => (
                  <TouchableOpacity
                    key={colIdx}
                    style={styles.gridCell}
                    onPress={() => navigation.navigate('loop3')}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eaf2f3' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#e0e0e0'
  },
  logoContainer: { alignItems: 'center', flex: 1 },
  logoText: { fontSize: 28, fontWeight: 'bold', letterSpacing: 2, color: '#2b4d4d' },
  subtitle: { fontSize: 10, color: '#222', marginTop: 2 },
  mainContent: { flex: 1, flexDirection: 'row' },
  roadMap: { width: 110, backgroundColor: '#dbe9ea', padding: 8 },
  roadMapTitle: { fontWeight: 'bold', marginBottom: 8, color: '#b0bfc0' },
  roadMapItem: { fontSize: 11, color: '#2b4d4d', marginBottom: 2 },
  gridSection: { flex: 1, padding: 8 },
  gridHeaderRow: { flexDirection: 'row', marginBottom: 4  },
  gridHeader: { flex: 1, textAlign: 'center', fontWeight: 'bold', color: '#2b4d4d' },
  gridBody: {},
  gridRow: { flexDirection: 'row', marginBottom: 8 },
  gridCell: {
    flex: 1, height: 80, backgroundColor: '#7da6ad99', marginHorizontal: 4, borderRadius: 4
  },
  bottomBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    paddingVertical: 8, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#e0e0e0'
  }
});
