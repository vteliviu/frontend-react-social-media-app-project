import AuthForm from './AuthForm'
import hangoverLogo from '../../assets/images/hangoverLogo.jpg'
import styles from './AuthPage.module.scss'
import Footer from '../../components/footer/Footer'
import React, { useEffect } from 'react'

const AuthPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <img
          src={hangoverLogo}
          alt="login image"
          className={styles.brandLogo}
        ></img>

        <div className={styles.logoDescription}>
          <h1>Connect</h1>
          <div className={styles.logoQuote}>
            <p>with people and share amazing experiencies. </p>
          </div>
        </div>
      </div>

      {/* call footer */}
      <Footer />
      {/* call autentification form */}
      <AuthForm />
    </>
  )
}

export default AuthPage
