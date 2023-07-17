import React from 'react'
import styled from 'styled-components'

const PostContentDiv = styled.div`
  width: 100%;
  padding-inline: 10px;
  text-align: left;
`

export default function PostContent(props) {
  return (
    <PostContentDiv>
      {props.content}
    </PostContentDiv>
  )
}
