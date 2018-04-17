import React from 'react';
import { Text, View } from 'react-native';

const InventoryList = (props) => {
    const { textFormat, viewFormat } = styling;
    return (
        <View style={viewFormat}>
            <Text style={textFormat}>{'hello-world'}</Text>
        </View>
    );
};

const styling = {
    viewFormat: {
        paddingTop: 15,
        position: 'relative'
    },
    textFormat: {
        fontSize: 15
    }
};

export default InventoryList;
