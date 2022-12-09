import MyAccount from 'components/MyAccount';
import Head from 'next/head';

const account = () => {
  return (
    <>
      <Head>
        <title>React Shop - My account</title>
      </Head>
      <MyAccount />
    </>
  );
};

export default account;
