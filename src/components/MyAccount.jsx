import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  console.log(styles[('secondary-button', 'login-button')]);
  return (
    <div className={styles.EditAccount}>
      <div className={styles.login}>
        <div className={styles['form-container']}>
          <h1 className={styles.title}>My account</h1>

          <form action="/" className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <p className={styles.value}>Camila Yokoo</p>

              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <p className={styles.value}>camilayokoo@gmail.com</p>

              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <p className={styles.value}>*********</p>
            </div>

            <input type="submit" value="Edit" className={`${styles['secondary-button']} ${styles['login-button']}`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
