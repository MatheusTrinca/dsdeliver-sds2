import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFFFFF',
    marginLeft: 12,
    fontFamily: 'OpenSans_700Bold',
  },
});
