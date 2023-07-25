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
    ingredientListButtonRow: {
        columnGap: 16,
        flexDirection: 'row',
        marginHorizontal: 8,
        marginVertical: 4
    },
    ingredientListButton: {
        // color: '#0645ad',
        fontSize: 16
    },
    ingredientList: {
        justifyContent: 'center'
    },
    ingredientListColumnLabels: {
        flexDirection: 'row',
        margin: 8
    },
    ingredientListColumnLabel: {
        textAlign: 'center'
    },
    ingredientListItem: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        padding: 8
    },
    ingredientListItemSelected: {
        backgroundColor: '#eee',
        borderColor: '#ddd',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        padding: 8
    },
    ingredientListText: {
        fontSize: 18
    },
    ingredientListItemName: {
        flexBasis: '50%',
        justifyContent: 'center'
    },
    ingredientListItemQuantityBox: {
        alignItems: 'center',
        flexBasis: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    ingredientListItemQuantity: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ingredientListItemQuantitySelected: {
        alignItems: 'center',
        flexBasis: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ingredientListItemQuantityEditButton: {
        fontSize: 24
    },
    ingredientListItemImage: {
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