import React from 'react';
import styles from '@styles/MainContainer.module.scss';
import ProductCard from '../components/ProductCard';
import useGetProducts from '../hooks/useGetProducts';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const MainContainer = () => {
  const products = useGetProducts(API);

  const fixAPI = async function() {
    const response = await axios(API);
    const products = response.data;
    const brokenProducts = products.filter(product => {
      return product.images[0] == 'vacio' || product.images[0] == undefined;
    });
    const brokenIds = brokenProducts.map(product => product.id);
    brokenIds.forEach(id => console.log(axios.delete(API + `/${id}`)) );
  };

  fixAPI();

  return (
    <section className={styles['main-container']}>
      <div className={styles['cards-container']}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default MainContainer;
