import React from 'react'
import Post from './Post'
import Loader from './Loader'
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { axiosInstance } from "../axios";

const PostListDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export default function PostList() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/twoots")
      setPosts(response.data)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }

    fetchData()    
  }, [])
  
  return (
    <>
      { isLoading ? <Loader/> : (
        <PostListDiv>
          {posts.map((post) => {
            return <Post key={post._id} post={post} />
          })}
        </PostListDiv>
      )}
    </>
  )
}
