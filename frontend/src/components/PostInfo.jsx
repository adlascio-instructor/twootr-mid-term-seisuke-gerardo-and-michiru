import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const PostInfoDiv = styled.div`
  width: 100%;
  padding-inline: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
`

export default function PostInfo(props) {

  const [isReportActive, setIsReportActive] = useState(false)
  const [isRetwootActive, setIsRetwootActive] = useState(false)
  const [isLikeActive, setIsLikeActive] = useState(false)

  const reportIconClicked = function() {
    setIsReportActive(!isReportActive)
  }

  const retwootIconClicked = function() {
    setIsRetwootActive(!isRetwootActive)
  }

  const likeIconClicked = function() {
    setIsLikeActive(!isLikeActive)
  }

  return (
    <PostInfoDiv>
      <div className='date'>
        {props.dateAdded}
      </div>
      <div className='reaction'>
        <i className={`fa-solid fa-flag ${isReportActive ? "active" : ""}`} onClick={reportIconClicked}></i>
        <i className={`fa-solid fa-retweet ${isRetwootActive ? "active" : ""}`} onClick={retwootIconClicked}></i>
        <i className={`fa-solid fa-heart ${isLikeActive ? "active" : ""}`} onClick={likeIconClicked}></i>
      </div>
    </PostInfoDiv>
  )
}
