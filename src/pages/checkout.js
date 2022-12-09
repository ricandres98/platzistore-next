import Head from 'next/head';
import Checkout from 'containers/Checkout';

const orders = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Checkout />
    </>
  );
};

export default orders;
