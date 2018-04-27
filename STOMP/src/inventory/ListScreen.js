import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

// This is the list from React Native Elements
import { List, ListItem } from 'react-native-elements'

// Here's an array that we will use for dummmy data
// TODO: make a request to the heroku server to retrieve the data <- maybe do this on the item, not here.
// TODO: populate the icon (or image) with something suitible
const list = [
  {
    name: 'Foo',
    description: 'First item in the list',
    icon: 'child-care',
  },
  {
    name: 'Bar',
    description: 'Second item in the list',
    icon: 'pool',
  },
]

export default class ListScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'List',
  };

  render() {

    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          // this maps our map to renderable ListItems
          list.map((item, index) => (
            <ListItem
              key={index} // Ensure these are unique per item (like by using the list index)
              title={item.name}
              subtitle={item.description}
              leftIcon={{name: item.icon}}
              onPress={() =>

                // Navigate to the item screen, and pass the name of the selected item as a prop
                navigate('Item', { name: item.name })
              }
            />
          ))
        }
      </List>
    );
  }
}
