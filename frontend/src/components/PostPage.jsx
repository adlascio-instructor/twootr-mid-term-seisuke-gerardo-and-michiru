import { useState, useEffect } from 'react'
import { axiosInstance } from '../axios'
import NewPost from './NewPost'
import PostList from './PostList'
import styled from 'styled-components'

const StyledPostPage = styled.div`
  width: 70%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function PostPage({ buttonRef, profile }) {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/twoots')
      setPosts(response.data)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }

    fetchData()
  }, [])

  const addNewPost = async (newPost) => {
    const response = await axiosInstance.post('/twoot', newPost)
    setPosts((prevPosts) => [response.data, ...prevPosts])
  }

  return (
    <StyledPostPage>
      <NewPost
        buttonRef={buttonRef}
        addNewPost={addNewPost}
        profile={profile}
      />
      <PostList posts={posts} isLoading={isLoading} />
    </StyledPostPage>
  )
}

export default PostPage
