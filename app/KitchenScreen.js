import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import styles from '../styles';
import { changeListMode, handleModeListItemPress } from '../hooks';
import { toggleSelectAll, getIngredientListItemStyle } from '../utils';

function KitchenScreen() {

  const data=[
    {name: 'Granny Smith Apples', quantity: '5', unit: 'ct'},
    {name: 'Everything Bagels', quantity: '6', unit: 'ct'},
    {name: '2% Milk', quantity: '1', unit: 'gal'},
    {name: 'a', quantity: '1', unit: 'ct'},
    {name: 'b', quantity: '1', unit: 'ct'},
    {name: 'c', quantity: '1', unit: 'ct'},
    {name: 'd', quantity: '1', unit: 'ct'},
    {name: 'e', quantity: '1', unit: 'ct'},
    {name: 'f', quantity: '1', unit: 'ct'},
    {name: 'g', quantity: '1', unit: 'ct'},
    {name: 'h', quantity: '1', unit: 'ct'},
    {name: 'i', quantity: '1', unit: 'ct'},
    {name: 'j', quantity: '1', unit: 'ct'},
    {name: 'k', quantity: '1', unit: 'ct'},
    {name: 'l', quantity: '1', unit: 'ct'},
    {name: 'm', quantity: '1', unit: 'ct'},
    {name: 'n', quantity: '1', unit: 'ct'},
    {name: 'o', quantity: '1', unit: 'ct'},
    {name: 'p', quantity: '1', unit: 'ct'}
  ];

  const [kitchenListMode, setKitchenListMode] = useState('');
  const [selectedKitchenItem, setSelectedKitchenItem] = useState('');
  const [multiSelectedKitchenItems, setMultiSelectedKitchenItems] = useState([]);

  const changeKitchenListMode = (mode) => {
    changeListMode(setSelectedKitchenItem, setMultiSelectedKitchenItems, setKitchenListMode, mode);
  }

  const handleItemPress = (item) => {
    handleModeListItemPress(selectedKitchenItem, setSelectedKitchenItem, multiSelectedKitchenItems, setMultiSelectedKitchenItems, item, kitchenListMode)
  }

  return (
    <SafeAreaView style={ styles.screenArea }>
      <View style={ styles.screenContent }>
        <View>
          <View style={ styles.searchBox }>
            <TextInput
              autoComplete='off'
              editable
              inputMode='search'
              placeholder='Search Kitchen...'
              returnKeyType='search'
              spellCheck={false}
            />
          </View>
        </View>
        <View>
          {kitchenListMode == '' ? (
            <View style={styles.ingredientListButtonRow}>
              <View>
                <Pressable>
                  <Text style={styles.ingredientListButton}>Add</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => {changeKitchenListMode('remove')}}>
                  <Text style={styles.ingredientListButton}>Remove</Text>
                </Pressable>
              </View>
            </View>
          ) : kitchenListMode == 'remove' ? (
            <View style={styles.ingredientListButtonRow}>
            <View>
                <Pressable onPress={() => {toggleSelectAll(setMultiSelectedKitchenItems, multiSelectedKitchenItems.length, data)}}>
                  <Text style={styles.ingredientListButton}>{multiSelectedKitchenItems.length == data.length ? 'Deselect All' : 'Select All'}</Text>
                </Pressable>
              </View>
              <View style={{ flexGrow: 1 }}></View>
              <View>
                <Pressable onPress={() => {changeKitchenListMode('')}}>
                  <Text style={styles.ingredientListButton}>Remove</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => {changeKitchenListMode('')}}>
                  <Text style={styles.ingredientListButton}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          ) : changeKitchenListMode('')}
        </View>
        <View style={ styles.ingredientList }>
          <ScrollView contentContainerStyle={{ paddingBottom: 270 }}>
            {data.map((item) => (
              <Pressable key={item.name} onPress={() => handleItemPress(item)} style={ getIngredientListItemStyle(item, selectedKitchenItem, multiSelectedKitchenItems) }>
                <View style={ styles.ingredientListItemName }>
                  <Text style={ styles.ingredientListText }>{item.name}</Text>
                </View>
                <View style={ styles.ingredientListItemQuantityBox }>
                  {selectedKitchenItem != item.name ? (
                    <View style={ styles.ingredientListItemQuantity }>
                      <Text style={ styles.ingredientListText }>{item.quantity} {item.unit}</Text>
                    </View>
                  ) : (
                    <View style={ styles.ingredientListItemQuantitySelected }>
                      <Pressable onPress={() => {}}>
                        <Text style={styles.ingredientListItemQuantityEditButton}>&minus;</Text>
                      </Pressable>
                      <View style={{ flexDirection: 'row' }}>
                        <TextInput keyboardType='decimal-pad' style={ styles.ingredientListText } value={item.quantity} />
                        <Text style={ styles.ingredientListText }> {item.unit}</Text>
                      </View>
                      <Pressable onPress={() => {}}>
                        <Text style={styles.ingredientListItemQuantityEditButton}>+</Text>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View style={ styles.ingredientListItemImage }>
                    
                </View>
              </Pressable>
            ))}
            <View style={{ borderColor: '#ddd', borderTopWidth: 1 }}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default KitchenScreen;