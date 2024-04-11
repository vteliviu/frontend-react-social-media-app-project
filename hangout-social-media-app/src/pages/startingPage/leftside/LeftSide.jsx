// react
import React from 'react'
// styles
import styles from './LeftSide.module.scss'
// import defaultDataUsers
import { Users } from '../../../dummyDataUsers'
import CloseFriends from '../../../components/closeFriends/CloseFriends'
// material ui
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import GroupsIcon from '@mui/icons-material/Groups'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import WorkIcon from '@mui/icons-material/Work'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import SchoolIcon from '@mui/icons-material/School'

const LeftSide = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <RssFeedIcon
              style={{ color: 'teal' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Feed</span>
          </li>
          <li className={styles.sidebarListItem}>
            <ChatIcon
              style={{ color: 'tomato' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Chat</span>
          </li>
          <li className={styles.sidebarListItem}>
            <PlayCircleFilledIcon
              style={{ color: 'lightblue' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Videos</span>
          </li>
          <li className={styles.sidebarListItem}>
            <GroupsIcon
              style={{ color: 'royalblue' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Grous</span>
          </li>
          <li className={styles.sidebarListItem}>
            <BookmarksIcon
              style={{ color: 'purple' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Bookmarks</span>
          </li>
          <li className={styles.sidebarListItem}>
            <HelpOutlineIcon
              style={{ color: 'grey' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Questions</span>
          </li>
          <li className={styles.sidebarListItem}>
            <WorkIcon
              style={{ color: 'brown' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Jobs</span>
          </li>
          <li className={styles.sidebarListItem}>
            <InsertInvitationIcon
              style={{ color: 'red' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Events</span>
          </li>
          <li className={styles.sidebarListItem}>
            <SchoolIcon
              style={{ color: 'blue' }}
              className={styles.sidebarIcon}
            />
            <span className={styles.listItemText}>Courses</span>
          </li>
        </ul>
        <button className={styles.sidebarButton}>Show More</button>
        <hr className={styles.sidebarHr} />
        <ul className={styles.sidebarFriendList}>
        {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LeftSide
