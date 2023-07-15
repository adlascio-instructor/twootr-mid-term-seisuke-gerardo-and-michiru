import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import "./App.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f4f1ec;
  font-family: "Kanit";
  width: 100%;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <UserProfile />
      <NewPost />
      <PostList />
    </>
  );
}

export default App;
