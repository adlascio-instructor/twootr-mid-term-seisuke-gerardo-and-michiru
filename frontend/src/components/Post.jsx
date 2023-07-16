import React, { useState } from 'react'
import styled from 'styled-components'

const PostDiv = styled.div`
  width: 80%;
  margin-inline: auto;
  padding: 10px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid black;
  box-shadow: 5px 5px 1px gray;
  font-family: 'Kanit', sans-serif;

  * {
    box-sizing: border-box;
    color: #888888;
  }

  .user {
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
  }

  .content {
    width: 100%;
    padding-inline: 10px;
    text-align: left;
  }

  hr {
    width: 100%;
    border: 1px solid black;
  }

  .info {
    width: 100%;
    padding-inline: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .date {

    }

    .reaction {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 5px;

      i.active {
        color: pink;
      }
    }
  }
`

export default function Post(props) {
  const { post } = props

  const [isReportActive, setReportActive] = useState(false)
  const [isRetwootActive, setRetwootActive] = useState(false)
  const [isLikeActive, setLikeActive] = useState(false)

  const reportIconClicked = function(event) {
    setReportActive(!isReportActive)
  }

  const retwootIconClicked = function(event) {
    setRetwootActive(!isRetwootActive)
  }

  const likeIconClicked = function(event) {
    setLikeActive(!isLikeActive)
  }

  return (
    <PostDiv className='post'>
      <div className='user'>
        <div className='user-basic-info'>
          <img className='user-icon' src={`https://avatars.dicebear.com/api/bottts/${post.authorSlug}.svg`}/>
          <span className='user-name'>{post.author}</span>
        </div>
        <div className='user-slug'>
          @{post.authorSlug}
        </div>
      </div>

      <div className='content'>
        {post.content}
      </div>

      <hr/>

      <div className='info'>
        <div className='date'>
        {post.dateAdded}
        </div>
        <div className='reaction'>
          <i className={`fa-solid fa-flag ${isReportActive ? "active" : ""}`} onClick={reportIconClicked}></i>
          <i className={`fa-solid fa-retweet ${isRetwootActive ? "active" : ""}`} onClick={retwootIconClicked}></i>
          <i className={`fa-solid fa-heart ${isLikeActive ? "active" : ""}`} onClick={likeIconClicked}></i>
        </div>
      </div>
    </PostDiv>
  )
}
