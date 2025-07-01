import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import BottomBar from './BottomBar';

const industries = [
  { id: 1, name: 'Information and Technology' },
  { id: 2, name: 'Entertainment' },
  // Add more industries as needed
];

export default function EconomicsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header with world map, title, subtitle, and menu */}
      <View style={styles.headerContainer}>
        <Image
          // source={require('./assets/world-map.png')} // Place a world map image in your assets folder
          style={styles.mapImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          world econ<Text style={{ color: '#2196F3' }}>o</Text>mies
        </Text>
        <Text style={styles.subtitle}>let's build and shape our economy</Text>
        <Feather name="more-vertical" size={24} color="#2196F3" style={styles.menuIcon} />
        <View style={styles.industriesRow}>
          <Text style={styles.industriesText}>2557 INDUSTRIES</Text>
          <Feather name="briefcase" size={16} color="#2196F3" style={{ marginLeft: 4 }} />
        </View>
      </View>

      {/* Table */}
      <View style={styles.tableWrapper}>
        <View style={styles.tableHeader}>
          <View style={styles.headerCell}>
            <Text style={styles.headerCellText}>1,200{'\n'}Industries</Text>
          </View>
          <View style={styles.headerCell}>
            <Text style={styles.headerCellText}>2,000{'\n'}Ideas</Text>
          </View>
        </View>
        <ScrollView>
          {industries.map((item, idx) => (
            <View key={item.id} style={styles.tableRow}>
              <View style={styles.cell}>
                <Text style={styles.cellText}>{`${item.id}.  ${item.name}`}</Text>
              </View>
              <View style={styles.cell} />
            </View>
          ))}
          {/* Empty rows for spacing */}
          <View style={styles.tableRow}>
            <View style={styles.cell} />
            <View style={styles.cell} />
          </View>
          <View style={styles.tableRow}>
            <View style={styles.cell} />
            <View style={styles.cell} />
          </View>
        </ScrollView>
        {/* Floating settings button */}
        <TouchableOpacity style={styles.fab}>
          <Feather name="settings" size={24} color="#2196F3" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: '#fff',
    position: 'relative',
  },
  mapImage: {
    width: width * 0.7,
    height: 50,
    marginBottom: -10,
    marginTop: 0,
    alignSelf: 'center',
    opacity: 0.7,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    letterSpacing: 1,
    marginTop: -8,
  },
  subtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: -2,
    marginBottom: 2,
  },
  menuIcon: {
    position: 'absolute',
    right: 18,
    top: 18,
  },
  industriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  industriesText: {
    color: '#2196F3',
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: '500',
  },
  tableWrapper: {
    flex: 1,
    margin: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
    position: 'relative',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  headerCell: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#fff',
  },
  headerCellText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    minHeight: 60,
    backgroundColor: '#f7fafd',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRightWidth: 1,
    borderColor: '#eee',
  },
  cellText: {
    fontSize: 15,
    color: '#222',
  },
  fab: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#2196F3',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    zIndex: 10,
  },
});