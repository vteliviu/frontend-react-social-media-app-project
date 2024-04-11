import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useState } from 'react'
import logo from '../../assets/icons/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/selectors'
import { toggleLogin } from '../../redux/slices/authSlice'

function Navigation() {
  // adding the states
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  //add the active class
  const toggleActiveClass = () => {
    isActive ? navigate('/auth') : navigate('/')
    setIsActive((prevState) => !prevState)
  }
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  const toggleAuth = () => {
    dispatch(toggleLogin())
    isLoggedIn ? navigate('/auth') : navigate('/')
  }

  //return events
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navigation}`}>
          <img
            src={logo}
            alt="login image"
            className={`${styles.logoImage}`}
          ></img>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href="/" className={`${styles.logo}`}>
                hangover{' '}
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/my-profile" className={`${styles.navLink}`}>
                My Profile
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Settings
              </a>
            </li>
            <li onClick={toggleActiveClass}>
              {/* <a href='/auth' className={`${styles.navLink}`}> */}
              <NavLink className={`${styles.navLink}`} to="/auth">
                {isActive ? 'Logout' : 'Login'}
              </NavLink>
              {/* </a> */}
            </li>
          </ul>

          <div
            className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Navigation

// const Navigation = () => {

//     const user = useSelector(selectUser)
//     const isLoggedIn = user.isAuthenticated;
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const toggleAuth = () => {
//         dispatch(toggleLogin())
//         isLoggedIn ? navigate('/auth') : navigate('/')
//     }

//     return (
//         <header>
//             <Link to='/'>
//                 <div className={styles.logo}>Social Media App</div>
//             </Link>

//             <nav>
//                 <ul className={styles.menu}>
//                     {isLoggedIn &&
//                         <>
//                             <li className={styles.menuItem}>
//                                 <NavLink to='/my-profile'>My Profile</NavLink>
//                             </li>
//                             <li className={styles.menuItem}>
//                                 <NavLink to='/friends'>Friends</NavLink>
//                             </li>
//                         </>}
//                     <li className={styles.menuItem} onClick={toggleAuth}>
//                         <NavLink to='/auth'>{isLoggedIn ? 'Logout' : 'Login'}</NavLink>
//                     </li>
//                     <li>{user.email}</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Navigation;
