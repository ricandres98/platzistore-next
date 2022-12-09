import Image from 'next/image';
import React from 'react';
import mainLogo from 'assets/logos/logo_yard_sale.svg';
import emailIcon from 'assets/icons/email.svg';
import '../styles/EmailSent.scss';
import Link from 'next/link';

const EmailSent = () => {
  return (
    <div className="EmailSent">
      <div className="login">
        <div className="form-container">
          <Image src={mainLogo} alt="logo" className="logo" />
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
          <div className="email-image">
            <Image src={emailIcon} alt="email" />
          </div>
          <button className="primary-button login-button">Login</button>
          <p className="resend">
            <span>Didn&apos;t receive the email?</span>
            <Link href="/">Resend</Link>
            <a href="/recovery/create-password">Create new password</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
