import Post from "./Post";
import Loader from "./Loader";
import styled from "styled-components";

const PostListDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export default function PostList({ posts, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PostListDiv>
          {posts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </PostListDiv>
      )}
    </>
  );
}
