import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import Counter from '../modules/counter';

/*request = new XMLHttpRequest();
request.open('GET', 'https://shrouded-crag-14655.herokuapp.com/getItem?name=bucket', true);
request.onreadystatechange = function() {
  if (request.readyState == 4 && request.status == 200) {
    responseString = request.responseText;
    item = JSON.parse(responseString); //response text into array
  }
};
request.send();*/

export default class ItemScreen extends React.Component {
    constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
      this.state = {
        MaxQuantity: -1,
        Reservations: [],
        id: params.id,
        name: params.name,
        loading: true,
        selectedCount: 0,
        token: params.token,
        email: params.email,
      }
    }

    componentDidMount = () => {
      this._getItem();
    }

    _getItem = () => {
      this.setState({
        loading: true,
      });
      console.log(this.state.id);

      fetch('https://shrouded-crag-14655.herokuapp.com/getItem?id=' + this.state.id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((responseJSON) => {this.setState({Reservations: responseJSON.reservations, MaxQuantity: responseJSON.quantity})})
        .catch((error) => {
          console.error(error);
        });
    }

    _reserveItem = () => {
      fetch('https://shrouded-crag-14655.herokuapp.com/reserveItem', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + this.state.token,
          },
          body: JSON.stringify({
            'id': this.state.id,
            'date': 4/1/2018,
            'quantity': this.state.selectedCount,
            'email': this.state.email,
          }),
        }).then((response) => {console.log(response)})
          .catch((error) => {
            console.error(error);
        });
    }
    // These are for react navigation, like header bar and such
    // Here, let's have the title use props passed in:
    static navigationOptions = {
        title: "Reserve Item",
        headerStyle: {
          backgroundColor: '#272727',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };

  render() {
    // Get parameters passed in from previous screen
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.state.name}</Text>
          </View>
          <View style={styles.form}>
              <View style={styles.formRow}>
                  <View style={{flex: 1}}>
                      <Text>{'Choose Date:'}</Text>
                  </View>
                  <View style={{flex: 1}}>
                      <Text>{'______'}</Text>
                  </View>
              </View>
              <View style={styles.formRow}>
                  <View style={{flex: 1}}>
                      <Text>{'Available:'}</Text>
                  </View>
                  <View style={{flex: 1}}>
                      <Text>{this.state.MaxQuantity}</Text>
                  </View>
              </View>
              <View style={styles.formRow}>
                  <View style={{flex: 1}}>
                      <Text>{'How many?'}</Text>
                  </View>
                  <View style={{flex: 1}}>
                      <Counter
                          itemName={""}
                          count={0}
                          onValueChange= {(val) => {this.setState({selectedCount: val})}}
                      />
                  </View>
              </View>
              <Button
                  containerStyle={{flex: 1, justifyContent: 'center'}}
                  buttonStyle={styles.button}
                  onPress = {() => {this._reserveItem()}}
                  title="Reserve">
              </Button>
            </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
  },
  title: {
      color: '#272727',
      fontSize: 50,
      letterSpacing: 3,
      textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#272727",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: '100%',
    flex: 5,
    justifyContent: 'center'
  },
  formRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainerStyle: {
    backgroundColor: '#48797C',
    borderColor: '#80CBC4',
    borderWidth: 1,
    borderRadius: 3,
  },
  inputContainerStyle_password: {
    backgroundColor: '#FFFFFF',
    borderColor: '#80CBC4',
    borderRadius: 3,
    borderWidth: 1,
  },
  labelStyle: {
    fontSize: 12,
    color:'#272727',
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
  link: {
      marginTop: 10,
      color: '#48797C',
      textDecorationLine: 'underline',
  }
  });
