import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import InventoryList from './src/components/InventoryList';

const App = () => (
    <View>
        <Header headerText={'Inventory'} />
        <InventoryList listText={'{“objectName”: [], “datesAway”: [], “quantity”: []}'} />
    </View>
);
///

AppRegistry.registerComponent('inventory', () => App);
