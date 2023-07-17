import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const PostInfoDiv = styled.div`
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
`

export default function PostInfo(props) {

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
