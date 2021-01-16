import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import { Order } from '../types';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  function fetchData() {
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao carregar os pedidos'))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text style={styles.loader}>Carregando Dados...</Text>
        ) : (
          orders.map((order) => {
            return (
              <TouchableWithoutFeedback
                key={order.id}
                onPress={() => handleOnPress(order)}
              >
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            );
          })
        )}
      </ScrollView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },
  loader: {
    alignSelf: 'center',
    marginTop: '60%',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
