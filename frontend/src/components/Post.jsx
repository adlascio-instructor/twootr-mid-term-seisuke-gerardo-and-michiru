import PostUser from './PostUser'
import PostContent from './PostContent'
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

      i {
        cursor: pointer;
      }

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
      <PostUser author={post.author} authorSlug={post.authorSlug} />
      <PostContent content={post.content} />
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
