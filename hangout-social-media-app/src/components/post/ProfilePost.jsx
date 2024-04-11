// style
import styles from './ProfilePost.module.scss'
// material
import MoreVertIcon from '@mui/icons-material/MoreVert'
//img
import profileImg from '../../assets/images/profileImg.jpg'
import likeIcon from '../../assets/icons/like.jpg'
import love from '../../assets/icons/love.jpg'
import { useEffect, useState } from 'react'

export default function Post({ post }) {
  console.log(post)

  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    import(post.photo)
      .then((image) => {
        setImageSrc(image.default)
      })
      .catch((error) => {
        console.error('Error loading image:', error)
      })
  }, [post.photo])

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
     setIsLiked(!isLiked)
  }

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img className={styles.postProfileImg} src={profileImg} alt="" />
            <span className={styles.postUsername}>Giorgio Facundo</span>
            <span className={styles.postDate}>5 minutes ago</span>
          </div>

          <div className={styles.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImg} src={imageSrc} alt="" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              className={styles.likeIcon}
              src={likeIcon}
              onClick={likeHandler}
              alt=""
            />
            <img
              className={styles.likeIcon}
              src={love}
              onClick={likeHandler}
              alt=""
            />
            <span className={styles.postLikeCounter}>{like}</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>
              {post.comment} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
