import React, { useState } from 'react';
import styled from 'styled-components';
const ProfileDiv = styled.div`
height: 20rem;
max-width: 100%; 
background-color: #413f42;
position: static;
padding: 0;
margin: 0;
right: 0;
left: 0;
`
const ProfileForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 4rem;
`

export default function UserProfile() {
  const [newProfile, setNewProfile] = useState("")

  return (
    <ProfileDiv>
      <ProfileForm>
        <avatarPic>
          <img style={{height: "7rem",width: "7rem" }} src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg;" alt="" />
        </avatarPic>
        <div>
          <input style={{width: "8rem"}}></input> <input style={{width: "8rem"}}></input>
        </div>
      <h3>Here goes the name</h3>
      </ProfileForm>
    </ProfileDiv>
  )
}

