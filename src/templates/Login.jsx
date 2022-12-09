import Image from 'next/image';
import React, { useRef } from 'react';
import logo from 'assets/logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };

    console.log(form);
    console.log(formData);
    console.log(formData.entries().next().next());
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="form-container">
        <Image src={logo} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />

          <button type="submit" onClick={handleSubmit} className="primary-button login-button">
            Log in
          </button>
          <a href="/recovery-email">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
