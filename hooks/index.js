import { toggleFromArray } from '../utils';

const changeListMode = (setSelectedItem, setMultiSelectedItems, setMode, mode) => {
  setSelectedItem('');
  setMultiSelectedItems([]);
  setMode(mode);
}

const handleModeListItemPress = (selectedItem, setSelectedItem, multiSelectedItems, setMultiSelectedItems, item, mode) => {
  if (mode == '') {
    if (selectedItem == item.name) {
      setSelectedItem('');
    } else {
      setSelectedItem(item.name);
    }
  } else {
    setMultiSelectedItems(toggleFromArray(multiSelectedItems,item.name));
  }
}

export { changeListMode, handleModeListItemPress };