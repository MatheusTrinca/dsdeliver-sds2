import axios from 'axios';

//const API_URL = 'http://192.168.0.100:8080';
const API_URL = 'https://matheus-trinca-sds2.herokuapp.com';

export const fetchOrders = () => {
  return axios.get(`${API_URL}/orders`);
};

export const confirmDelivery = (orderId: number) => {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);
};

// CONTINUA em 2:14:00
