// import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/auth/AuthPage'
import NotFound from './pages/NotFound'
import MyProfile from './pages/profile/MyProfile'
import Layout from './components/layout/Layout'
import NavigationBar from './components/NavigationBar'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <div className={styles.pageLayout}>
        <Layout>
          <NavigationBar>
            <AuthPage />
          </NavigationBar>

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/auth" element={<AuthPage />}></Route>
            {/* <Route path='/my-profile' element={<ProfilePage></ProfilePage>}/> */}
            {/* <Route path='/profile/:id' element={<UserProfilePage></UserProfilePage>} /> */}
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  )
}

export default App
