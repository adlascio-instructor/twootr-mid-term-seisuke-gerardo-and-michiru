import React from 'react'
import Post from './Post'

import { useState, useEffect } from 'react';
export default function PostList() {

  const END_POINT = `http://localhost:8080/twoots`
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(END_POINT)
      const data = await response.json()
      console.log(data);
      setPosts(data)
    }

    fetchData()
  }, [])
  
  const post = {
    author: "Henry David Thoreau",
    authorSlug: "henry-david-thoreau",
    content: "Many men go fishing all of their lives without knowing that it is not fish they are after.",
    dateAdded: "2022-07-06"
  }
  return (
    <div>
      <Post post={post}>
      </Post>
    </div>
  )
}
