// styles
import styles from './Share.module.scss';

// material icons
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'


function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            className={styles.shareProfileImg}
            src= "../../../src/assets/images/profileImg.jpg"
            alt= ""
          />
          <input
            className={styles.shareInput}
            type="text"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>

              <PermMediaIcon style={{ color: "purple" }} className={styles.shareIcon} />

              <span className={styles.shareOptionText}> Photo or Video</span>
            </div>
            <div className={styles.shareOption}>
              <LabelIcon style={{ color: "royalblue" }}className={styles.shareIcon} />
              <span className={styles.shareOptionText}> Tag</span>
            </div>
            <div className={styles.shareOption}>
              <RoomIcon style={{ color: "grey" }} className={styles.shareIcon} />
              <span className={styles.shareOptionText}> Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotionsIcon style={{ color: "orangered" }} className={styles.shareIcon} />
              <span className={styles.shareOptionText}> Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share;
