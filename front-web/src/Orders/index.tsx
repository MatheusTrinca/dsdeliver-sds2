import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product, OrderLocationData } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  console.log(products);

  useEffect(() => {
    fetchProducts()
      .then((results) => setProducts(results.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </div>
  );
}

export default Orders;
