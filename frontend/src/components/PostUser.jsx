import React from 'react'
import styled from 'styled-components'

const PostUserDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-basic-info {
    display: flex;
    align-items: center;
    column-gap: 5px;
    .user-icon {
      width: 50px;
      height: auto;
    }

    .user-name {
      
    }
  }
`

export default function PostUser(props) {
  return (
    <PostUserDiv>
      <div className='user-basic-info'>
        <img className='user-icon' src={`https://avatars.dicebear.com/api/bottts/${props.authorSlug}.svg`}/>
        <span className='user-name'>{props.author}</span>
      </div>
      <div className='user-slug'>
        @{props.authorSlug}
      </div>
    </PostUserDiv>
  )
}
