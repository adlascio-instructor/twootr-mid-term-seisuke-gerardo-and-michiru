import React from 'react'

export default function Post(props) {
  const { post } = props

  return (
    <div className='post'>
      <div className='post-user'>
        <img className='post-user-icon' src={`https://avatars.dicebear.com/api/bottts/${post.authorSlug}.svg`}/>
        <span className='post-username'>{post.author}</span>
      </div>
      <div className='post-content'>
        {post.content}
      </div>
      <div className='post-info'>
        <div className='post-date'>
        {post.dateAdded}
        </div>
        <div className='post-reaction'>
          Reaction Icons
        </div>
      </div>
    </div>
  )
}
