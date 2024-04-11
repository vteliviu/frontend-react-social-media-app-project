// styles
import styles from './Online.module.scss'
// react
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react';


export default function Online({ user }) {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(user.profilePicture).then((image) => {
      setImageSrc(image.default);
    }).catch((error) => {
      console.error('Error loading image:', error);
    });
  }, [user.profilePicture]);

  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileImgContainer}>
        <img className={styles.rightbarProfileImg} src={imageSrc} alt="" />
        <span className={styles.rightbarOnline}></span>
      </div>
      <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
  )
}

