// react
import React from 'react'
// import defaultDataUsers
import { Users } from '../../../dummyDataUsers'
// components
import Online from '../../../components/online/Online'
// styles
import styles from './RightSide.module.scss'


const RightSide = () => {

  // function for bold text
    function BoldText(props) {
      const { text, boldText } = props

      const parts = text.split(boldText)

      return (
        <p>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index !== parts.length - 1 && (
                <strong style={{ fontWeight: 'bold' }}>{boldText}</strong>
              )}
            </React.Fragment>
          ))}
        </p>
      )
    }

  return (
    <div className={styles.rightBar}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayContainer}>
          <img
            className={styles.birthdayImg}
            src="../../../src/assets/images/birthday.jpg"
            alt=""
          />
          <span className={styles.birthdayText}>
            {/* <BoldText
              text="Andrei George and 2 other friends celebrate their birthdays today."
              boldText="Andrei George"
            /> */}
            <span className={styles.birthdayName}>Andrei George</span> and 2 other friends celebrate their birthdays today.
          </span>
        </div>
        <img
          className={styles.rightbarAd}
          src="../../../src/assets/images/advertise.jpg"
          alt=""
        />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RightSide
