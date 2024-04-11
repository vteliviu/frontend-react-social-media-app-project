import { useState } from 'react'
import styles from './AuthForm.module.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../redux/slices/authSlice';
import { selectUser } from '../../redux/selectors';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const user = useSelector(selectUser)

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const toggleAuthState = () => {
        setIsLogin(prevState => !prevState)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        if (isLogin) {
            try {
                const payload = {
                    email: username,
                    password: password
                }

                await dispatch(loginUser(payload))
                if (user.isAuthenticated) {
                    navigate('/')
                }
            } catch (err) {
                console.error(err)
            }
        } else {
            try {
                const payload = {
                    email: username,
                    password: password
                }
                await dispatch(registerUser(payload))

            } catch(err) {
                console.error(err)
            }
        }
    }

    const actionIsNotLoading = (
        <button>{isLogin ? 'Login' : 'Create new account'}</button>
    )
    return (
        <div className={styles.auth}>
            <h2 className={styles.action}>{isLogin ? 'Login' : 'Create new account'}</h2>
            <form onSubmit={submitHandler} autoComplete='off' noValidate>
                <div className={styles.control}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id='username'
                        placeholder='Enter your username'
                        required onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id='password'
                        placeholder='Enter your password'
                        required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.actions}>
                    {user.loading && <p>Please try again</p>}
                    {user.error && <p>Sending request...</p>}
                    {!user.loading && actionIsNotLoading}
                    <button type='button' className={styles.toggle} onClick={toggleAuthState}>
                        {isLogin ? 'Create new account' : 'Login with an existing account'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm