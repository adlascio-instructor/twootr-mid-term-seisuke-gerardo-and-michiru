import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import PostPage from "./components/PostPage";
import { useRef } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f4f1ec;
  font-family: "Kanit";
  width: 100%;
  }
`;
function App() {
  const buttonRef = useRef()
  const focusClick = () => {
    buttonRef.current.focus();
  }
  return (
    <>
      <GlobalStyle />
      <Header buttonRef={buttonRef}/>
      <UserProfile />
      <PostPage buttonRef={buttonRef} />
    </>
  );
}

export default App;
