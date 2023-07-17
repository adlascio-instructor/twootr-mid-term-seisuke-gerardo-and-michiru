import { useState, useEffect } from "react";
import { axiosInstance } from "../axios";
import NewPost from "./NewPost";
import PostList from "./PostList";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/twoots");
      setPosts(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  const addNewPost = async (newPost) => {
    const response = await axiosInstance.post("/twoot", newPost);
    setPosts((prevPosts) => [response.data, ...prevPosts]);
  };

  return (
    <>
      <NewPost addNewPost={addNewPost} />
      <PostList posts={posts} isLoading={isLoading} />
    </>
  );
}

export default PostPage;
