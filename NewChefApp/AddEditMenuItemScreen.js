import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const AddEditMenuItemScreen = ({ route, navigation }) => {
  const { onSave, initialItem } = route.params || {};
  const [dishName, setDishName] = useState(initialItem ? initialItem.dishName : '');
  const [description, setDescription] = useState(initialItem ? initialItem.description : '');
  const [course, setCourse] = useState(initialItem ? initialItem.course : 'Starters');
  const [price, setPrice] = useState(initialItem ? initialItem.price : '');

  const saveItem = () => {
    const newItem = { dishName, description, course, price };
    onSave(newItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{initialItem ? 'Edit Menu Item' : 'Add New Menu Item'}</Text>
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Save" onPress={saveItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  picker: { marginBottom: 10 },
});

export default AddEditMenuItemScreen;
