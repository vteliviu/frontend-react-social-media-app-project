
import styles from './MyProfile.module.scss';
// components
import LeftSide from '../startingPage/leftside/LeftSide'
import ProfileInfo from '../../components/profileinfo/ProfileInfo'
import Post from '../../components/post/ProfilePost'
import Share from '../../components/share/Share'

// data
import { Posts } from '../../dummyDataUsers'

const MyProfile = () => {
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.leftSideProfile}>
          <LeftSide />
        </div>
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src="../../../src/assets/images/coverImg.jpg"
                alt=""
              />
              <img
                className={styles.profileUserImg}
                src="../../../src/assets/images/profileImg.jpg"
                alt=""
              />
            </div>
            <div className={styles.profileInfo}>
              <h3 className={styles.profileInfoName}>Giorgio Facunda</h3>
              <span className={styles.profileInfoDesc}>
                A fashion man is someone who has a keen eye for style, is always
                well-dressed, and knows how to put together ensembles that
                reflect current trends and their own personality.
              </span>
            </div>
          </div>
          <div className={styles.profileCenter}>
            <div className={styles.shareContainer}>
              <Share />
            </div>
            <div className={styles.post}>
              {Posts.map((p) => (
                <Post key={p.id} post={p} />
              ))}

            </div>
          </div>
          <div className={styles.profileCenterRight}>
            <div className={styles.userInfo}>
              <ProfileInfo />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default MyProfile

