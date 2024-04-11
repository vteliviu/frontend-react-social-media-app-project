// react
import React, { useState, useEffect } from 'react'
// hooks
import useFetch from '../../hooks/useFetch'
// server
import postService from '../../services/postService'
// styles
import styles from './StartingPage.module.scss'
// components
import Newsfeed from './newsfeed/Newsfeed'
import LeftSide from './leftside/LeftSide'
import RightSide from './rightside/RightSide'
import Footer from '../../components/footer/Footer'
import Share from '../../components/share/Share'

const StartingPage = () => {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

  const [postList, setPostList] = useState([])

  useEffect(() => {
    async function getPosts() {
      const response = await postService.get()
      setPostList(response)
      return response
    }
    getPosts().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <>
      <div className={styles.mainContainer}>
        <aside className={styles.leftSide}>
          <LeftSide />
        </aside>
        <section className={styles.newsfeed}>
          <Share />
          {postList &&
            postList.map((post) => {
              return <Newsfeed postData={post} key={post.id} />
            })}
          {posts &&
            posts.map((post) => {
              return <Newsfeed postData={post} key={post.id} />
            })}
        </section>
        <aside className={styles.rightSide}>
          <RightSide  />
        </aside>
      </div>
      <Footer />
    </>
  )
}

export default StartingPage
