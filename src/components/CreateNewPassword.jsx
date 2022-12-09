import React from 'react';
import Image from 'next/image';
import mainLogo from 'assets/logos/logo_yard_sale.svg';
import '../styles/CreateNewPasssword.scss';

const CreateNewPassword = () => {
  return (
    <div className="CreateNewPassword">
      <div className="login">
        <div className="form-container">
          <Image src={mainLogo} alt="logo" className="logo"></Image>
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for your account</p>
          <form action="/" className="form">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className="input input-password"></input>
            <label htmlFor="new-password" className="label">
              Password
            </label>
            <input type="password" id="new-password" placeholder="*********" className="input input-password"></input>
            <input type="submit" value="Confirm" className="primary-button login-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
