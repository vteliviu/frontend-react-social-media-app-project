// react
import {useState, useEffect} from 'react';
// styles
import styles from './CloseFriends.module.scss'

export default function CloseFriends ({ user }) {

  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    import(user.profilePicture).then((image) => {
      setImageSrc(image.default);
    }).catch((error) => {
      console.error('Error loading image:', error);
    });
  }, [user.profilePicture]);

  return (
    <li className={styles.sidebarFriend}>
      <img src={imageSrc} alt="" className={styles.sidebarFriendImg} />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  )
}