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
    <div>
      { isLoading ? null : (
        <Post post={posts[0]} />
      )}
    </div>
  )
}
