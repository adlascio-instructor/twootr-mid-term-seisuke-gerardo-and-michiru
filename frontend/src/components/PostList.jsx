import React from 'react'
import Post from './Post'
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const PostListDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export default function PostList() {

  const END_POINT = `http://localhost:8080/twoots`
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(END_POINT)
      const data = await response.json()
      setPosts(data)
      setLoading(false)
    }

    fetchData()    
  }, [])
  
  return (
    <>
      { isLoading ? null : (
        <PostListDiv>
          {posts.map((post) => {
            return <Post key={post._id} post={post} />
          })}
        </PostListDiv>
      )}
    </>
  )
}
