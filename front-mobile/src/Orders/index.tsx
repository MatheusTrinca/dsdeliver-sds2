import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { ScrollView } from 'react-native-gesture-handler';

const Orders = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },
});

// Continua em 1:24:38
