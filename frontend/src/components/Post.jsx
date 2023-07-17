import PostUser from './PostUser'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
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

`

export default function Post(props) {
  const { post } = props

  return (
    <PostDiv>
      <PostUser author={post.author} authorSlug={post.authorSlug} />
      <PostContent content={post.content} />
      <hr/>
      <PostInfo dateAdded={post.dateAdded} />
    </PostDiv>
  )
}
