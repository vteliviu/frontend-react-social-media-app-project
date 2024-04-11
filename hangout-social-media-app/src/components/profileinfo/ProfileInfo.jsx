//styles
import styles from "./ProfileInfo.module.scss";
// img
import user9 from "../../assets/images/user9.jpg";
import user3 from "../../assets/images/user3.jpg";
import user2 from "../../assets/images/user2.jpg";
import user4 from "../../assets/images/user4.jpg";
import user5 from "../../assets/images/user5.jpg";
import user6 from "../../assets/images/user6.jpg";

export default function ProfileInfo() {



  return (
    <>
      <h4 className={styles.profileTitle}>User Information</h4>
      <div className={styles.profileInfo}>
        <div className={styles.profileInfoItem}>
          <span className={styles.profileInfoKey}>City:</span>
          <span className={styles.profileInfoValue}>Singapore</span>
        </div>
        <div className={styles.profileInfoItem}>
          <span className={styles.profileInfoKey}>From:</span>
          <span className={styles.profileInfoValue}>Timisoara, Romania</span>
        </div>
        <div className={styles.profileInfoItem}>
          <span className={styles.profileInfoKey}>Relationship:</span>
          <span className={styles.profileInfoValue}>Married</span>
        </div>
      </div>
      <h4 className={styles.profileTitle}>User Friends</h4>
      <div className={styles.followings}>
        <div className={styles.following}>
          <img
            className={styles.followingImg}
            src={user9}
            alt=""
          />
          <span className={styles.followingName}>Andreea Carvalho</span>
        </div>
        <div className={styles.following}>
          <img
            className={styles.followingImg}
            src={user3}
            alt=""
          />
          <span className={styles.followingName}>George Heidi</span>
        </div>
        <div className={styles.following}>
          <img
            className={styles.followingImg}
            src={user2}
            alt=""
          />
          <span className={styles.followingName}>Lyla Stephany</span>
        </div>
        <div className={styles.following}>
          <img
            className={styles.followingImg}
            src={user4}
            alt=""
          />
          <span className={styles.followingName}>Francois Bernard</span>
        </div>
        <div className={styles.following}>
          <img
            className={styles.followingImg}
            src={user5}
            alt=""
          />
          <span className={styles.followingName}>Juan Luis</span>
        </div>
        <div className={styles.following}>
          <img
            className={styles.followingImg}
            src={user6}
            alt=""
          />
          <span className={styles.followingName}>Claire Fontaine</span>
        </div>
      </div>
    </>
  )
}
