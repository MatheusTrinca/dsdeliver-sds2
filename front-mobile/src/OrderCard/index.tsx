import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Order } from '../types';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

const formatDateNow = (date: string) => {
  return dayjs(date).fromNow();
};

const formatToCurrency = (amount: number) => {
  return 'R$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

type Props = {
  order: Order;
};

const OrderCard = ({ order }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderName}>Pedido: {order.id}</Text>
        <Text style={styles.orderPrice}>{formatToCurrency(order.total)}</Text>
      </View>
      <Text style={styles.text}>{formatDateNow(order.moment)}</Text>
      <View style={styles.productsList}>
        {order.products.map((prod) => {
          return (
            <Text key={prod.id} style={styles.text}>
              {prod.name}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#9E9E9E',
    fontFamily: 'OpenSans_400Regular',
  },
  orderName: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold',
  },
  orderPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'right',
    letterSpacing: -0.24,
    color: '#DA5C5C',
    fontFamily: 'OpenSans_700Bold',
  },
  productsList: {
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 15,
  },
});
