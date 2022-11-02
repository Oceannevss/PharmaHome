import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components';

const Map = () => {
  return (
    <Container>
      <View style={styles.container}>
        <MapView style={styles.map} region={this} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const Container = styled.Container`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default Map;
