import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 2.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function createMarker(modifier = 1) {
  return {
    id: modifier,
    latitude: LATITUDE - (SPACE * modifier),
    longitude: LONGITUDE - (SPACE * modifier),
  };
}

const MARKERS = [
  createMarker(),
  createMarker(2),
  createMarker(3),
  createMarker(4),
];

const DEFAULT_PADDING = {
  top: 40, right: 40, bottom: 40, left: 40,
};

class StaticMap extends React.Component {
  static navigationOptions = {
    title: 'StaticMap',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }).isRequired,
  };
  //
  // static defaultProps = {
  //   name: '',
  // };

  fitPadding() {
    this.map.fitToCoordinates([MARKERS[2], MARKERS[3]], {
      edgePadding: {
        top: 100, right: 100, bottom: 100, left: 100,
      },
      animated: true,
    });
  }

  fitBottomTwoMarkers() {
    this.map.fitToCoordinates([MARKERS[2], MARKERS[3]], {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  fitAllMarkers() {
    this.map.fitToCoordinates(MARKERS, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  render() {
    const { navigation: { state: { params: { name } } } } = this.props;
    return (
      <View style={styles.container}>
        <MapView
          ref={(ref) => { this.map = ref; }}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {MARKERS.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.fitPadding()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Name: {name}</Text>
            <Text>Fit Bottom Two Markers with Padding</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.fitBottomTwoMarkers()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Fit Bottom Two Markers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.fitAllMarkers()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Fit All Markers!3</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default StaticMap;
