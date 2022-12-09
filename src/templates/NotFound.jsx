import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>Error 404 not found</h1>
        <div className="not-found-circle">
          <span>404</span>
        </div>
        <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default NotFound;
