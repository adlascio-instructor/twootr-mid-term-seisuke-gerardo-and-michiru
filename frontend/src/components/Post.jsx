import React from 'react'

export default function Post(props) {
  const { post } = props.post
  console.log(post);
  return (
    <div className='post'>
      <div className='post-user'>
        <img src={`https://avatars.dicebear.com/api/bottts/aaa.svg`}/>
      </div>
      <div className='post-content'>
        This is sample text
      </div>
      <div className='post-info'>
        <div className='post-date'>
          Twooted 22 days ago
        </div>
        <div className='post-reaction'>
          Reaction Icons
        </div>
      </div>
    </div>
  )
}
