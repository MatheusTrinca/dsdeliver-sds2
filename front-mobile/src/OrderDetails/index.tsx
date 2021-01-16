import React from 'react';
import { StyleSheet, Text, View, Alert, Linking } from 'react-native';
import { Order } from '../types';
import OrderCard from '../OrderCard';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';

type Props = {
  route: {
    params: {
      order: Order;
    };
  };
};

const OrderDetails = ({ route }: Props) => {
  const navigation = useNavigation();
  const { order } = route.params;

  const handleCancel = () => {
    navigation.navigate('Orders');
  };

  const handleConfirmDelivery = (orderId: number) => {
    confirmDelivery(orderId)
      .then(() => Alert.alert(`Pedido ${orderId} entregue com sucesso`))
      .then(() => navigation.navigate('Orders'))
      .catch(() => Alert.alert(`Houve um erro ao entregar pedido ${orderId}`));
  };

  const handleStartNavigation = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`
    );
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton
          style={styles.button}
          onPress={() => handleConfirmDelivery(order.id)}
        >
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleCancel}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
      </View>
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold',
  },
});
