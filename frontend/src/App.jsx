import Header from './components/Header'
import UserProfile from './components/UserProfile'
import { createGlobalStyle } from 'styled-components'
import PostPage from './components/PostPage'
import { useRef, useState } from 'react'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f4f1ec;
    font-family: "Kanit";
    width: 100%;
    margin: 0;
  }
`
function App() {
  const [profile, setProfile] = useState(null)

  const buttonRef = useRef()
  // const focusClick = () => {
  //   buttonRef.current.focus()
  // }
  return (
    <>
      <GlobalStyle />
      <Header buttonRef={buttonRef} />
      <UserProfile setProfile={setProfile} />
      <PostPage buttonRef={buttonRef} profile={profile} />
    </>
  )
}

export default App
