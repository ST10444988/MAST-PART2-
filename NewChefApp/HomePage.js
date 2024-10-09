import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([]);

  const addItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Chef's Menu</Text>

      {/* Display Total Number of Menu Items */}
      <Text style={styles.subHeader}>
        Total Menu Items: {menuItems.length}
      </Text>

      {/* Display the List of Menu Items */}
      <FlatList
        data={menuItems}
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

      {/* Button to Navigate to Add/Edit Menu Item Screen */}
      <Button
        title="Add New Menu Item"
        onPress={() => navigation.navigate('AddEditMenu', { onSave: addItem })}
      />

      {/* Button to Navigate to Course Selection Screen */}
      <Button
        title="Filter by Course"
        onPress={() => navigation.navigate('CourseSelection', { menuItems })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subHeader: { fontSize: 18, marginVertical: 10 },
  menuItem: { padding: 10, marginBottom: 10, backgroundColor: '#f0f0f0' },
  itemText: { fontWeight: 'bold' },
});

export default HomePage;
