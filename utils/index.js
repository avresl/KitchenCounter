import styles from '../styles';

const toggleFromArray = (array, e) => {
  if (array.includes(e)) {
    const i = array.indexOf(e);
    return [...array.slice(0,i), ...array.slice(i+1,array.length)];
  } else {
    return [e, ...array];
  }
}

const toggleSelectAll = (setList, listLength, data) => {
  if (listLength == data.length) {
    setList([]);
  } else {
    const items = [];
    for (let item of data) {
      items.push(item.name);
    }
    setList(items);
  }
}

const getGroceryListItemStyle = (item, singleSelection, doubleSelection) => {
  if (singleSelection == item.name || doubleSelection.includes(item.name)) {
    return styles.groceryListItemSelected;
  } else {
    return styles.groceryListItem;
  }
}

export { toggleFromArray, toggleSelectAll, getGroceryListItemStyle };