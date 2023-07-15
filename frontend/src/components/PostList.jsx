import React from 'react'
import Post from './Post'

export default function PostList() {
  
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
