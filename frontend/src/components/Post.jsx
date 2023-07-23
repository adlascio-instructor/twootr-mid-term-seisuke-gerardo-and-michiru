import PostUser from './PostUser'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
import styled from 'styled-components'

const PostDiv = styled.div`
  width: 100%;
  margin-inline: auto;
  padding: 10px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid black;
  font-family: 'Kanit', sans-serif;

  transition: all 1s;

  * {
    box-sizing: border-box;
    color: #888888;
  }

  hr {
    width: 100%;
    border: 1px solid black;
  }

  &:hover {
    translate: -3px -3px;
    box-shadow: 5px 5px 1px gray;
    transition: all .3s;
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
