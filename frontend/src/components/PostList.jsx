import React from 'react'
import Post from './Post'

import { useState, useEffect } from 'react';
export default function PostList() {

  const END_POINT = `http://localhost:8080/twoots`
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(END_POINT)
      const data = await response.json()
      // console.log(data);
      setPosts(data)
      setLoading(false)
    }

    fetchData()    
  }, [])
  
  return (
    <>
      { isLoading ? null : (
        <div>
          {posts.map((post) => {
            return <Post key={post._id} post={post} />
          })}
        </div>
      )}
    </>
  )
}
