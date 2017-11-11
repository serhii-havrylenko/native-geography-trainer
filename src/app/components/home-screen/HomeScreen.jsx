// @flow

import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

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
