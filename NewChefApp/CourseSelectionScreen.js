import React, { useState } from 'react';
import { View, Text, CheckBox, Button, FlatList, StyleSheet } from 'react-native';

const CourseSelectionScreen = ({ route, navigation }) => {
  const { menuItems } = route.params;
  const [filteredItems, setFilteredItems] = useState([]);
  const [starters, setStarters] = useState(false);
  const [mains, setMains] = useState(false);
  const [desserts, setDesserts] = useState(false);

  const applyFilter = () => {
    const selectedCourses = {
      Starters: starters,
      Mains: mains,
      Desserts: desserts,
    };
    
    const filtered = menuItems.filter(item => selectedCourses[item.course]);
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu by Course</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox value={starters} onValueChange={setStarters} />
        <Text>Starters</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={mains} onValueChange={setMains} />
        <Text>Mains</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={desserts} onValueChange={setDesserts} />
        <Text>Desserts</Text>
      </View>
      
      <Button title="Apply Filter" onPress={applyFilter} />

      {/* Display Filtered Items */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>
              {item.dishName} ({item.course}) - ${item.price}
            </Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  menuItem: { padding: 10, marginBottom: 10, backgroundColor: '#f0f0f0' },
  itemText: { fontWeight: 'bold' },
});

export default CourseSelectionScreen;
