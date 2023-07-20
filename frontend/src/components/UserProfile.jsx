import React, { useRef, useState } from 'react';
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
padding-top: 4rem;
margin-left: 2rem;
`
const ProfileButton = {
  width: "1.5rem",
  height: "1.5rem",
}

const ProfileName = styled.h3`
  margin-top: 1rem;
  `

export default function UserProfile() {
  const [newProfileData, setNewProfileData] = useState({
    firstName: "first",
    lastName: "last",
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    console.log("First name:", firstName);
    console.log("First name:", lastName);
    
    setNewProfileData({firstName: firstName, lastName: lastName})
  }
  const newProfile = `@${newProfileData.firstName}-${newProfileData.lastName}`
  // const [firstName, setFirstName] = useState("FirstName")
  // const [lastName, setLastName] = useState("LastName")

  // const newProfile = `@${firstName}-${lastName}`

  // const buttonClicked = () => {
  //   console.log("button works!");

  // }


  return (
    <ProfileDiv>
      <ProfileForm>
          <img style={{height: "7rem",width: "7rem", marginRight: "2rem" }} src={`https://avatars.dicebear.com/api/bottts/${newProfile}.svg`} alt="" />
        <div>
          <input ref={firstNameRef} style={{width: "8rem"}}></input> <input ref={lastNameRef} style={{width: "8rem"}}></input>
          <button  onClick={handleSubmit} style={{background: "transparent", border: "none",}}><img style={ProfileButton} src='./check.png'></img> </button>
        </div>
      </ProfileForm>
      <ProfileName>{newProfile}</ProfileName>
    </ProfileDiv>
  )
}

