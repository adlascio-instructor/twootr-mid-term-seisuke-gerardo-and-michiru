import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import PostPage from "./components/PostPage";

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
      <PostPage />
    </>
  );
}

export default App;
