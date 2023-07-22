import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screenArea: {
        height: '100%',
    },
    screenContent: {
        // padding: 16,
    },
    searchBox: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 4,
        marginVertical: 8,
        padding: 8
    },
    groceryListButton: {
        // color: '#0645ad',
        fontSize: 16
    },
    groceryList: {
        justifyContent: 'center'
    },
    groceryListColumnLabels: {
        flexDirection: 'row',
        margin: 8
    },
    groceryListColumnLabel: {
        textAlign: 'center'
    },
    groceryListItem: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        padding: 8
    },
    groceryListItemSelected: {
        backgroundColor: '#eee',
        borderColor: '#ddd',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        padding: 8
    },
    groceryListText: {
        fontSize: 18
    },
    groceryListItemName: {
        flexBasis: '50%',
        justifyContent: 'center'
    },
    groceryListItemQuantityBox: {
        alignItems: 'center',
        flexBasis: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    groceryListItemQuantity: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    groceryListItemQuantitySelected: {
        alignItems: 'center',
        flexBasis: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    groceryListItemQuantityEditButton: {
        fontSize: 24
    },
    groceryListItemImage: {
        alignItems: 'center',
        backgroundColor: '#bbbbbb',
        borderRadius: 8,
        height: 54,
        width: 64,
        flexBasis: '20%',
        justifyContent: 'center'
    }
})

export default styles;