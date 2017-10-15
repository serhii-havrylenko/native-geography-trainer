// @flow

import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  toolbar: {
    backgroundColor: '#6d6c6c',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  button: {
    width: 200,
    backgroundColor: '#6d6c6c',
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.main}>
        <Button
          title="Ololo"
          color="#841584"
          onPress={() =>
            navigate('StaticMap', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
