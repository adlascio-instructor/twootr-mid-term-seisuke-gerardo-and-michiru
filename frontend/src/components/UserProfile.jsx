import { useRef, useState } from 'react'
import styled from 'styled-components'

const ProfileDiv = styled.div`
  height: 20rem;
  max-width: 100%;
  background-color: #413f42;
  position: static;
  padding: 0;
  margin: 0;
  right: 0;
  left: 0;
  text-align: center;
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
  width: '1.5rem',
  height: '1.5rem',
}

const ProfileName = styled.h2`
  margin-top: 1rem;
  text-align: center;
`

export default function UserProfile({ setProfile }) {
  const [newProfileData, setNewProfileData] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
  })

  const [renderProfile, setRenderProfile] = useState(false)

  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value

    console.log('First name:', firstName)
    console.log('First name:', lastName)

    const newProfile = `${firstName}-${lastName}`
    setProfile(newProfile)
    setNewProfileData({ firstName: firstName, lastName: lastName })
    setRenderProfile(true)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setRenderProfile(false)
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
      {renderProfile ? (
        <>
          <img
            style={{ height: '9rem', width: '9rem', marginTop: '2rem' }}
            src={`https://avatars.dicebear.com/api/bottts/${newProfile}.svg`}
            alt=''
          />
          <ProfileName>{newProfile}</ProfileName>
          <button
            onClick={handleEdit}
            style={{ background: 'transparent', border: 'none' }}
          >
            <img style={ProfileButton} src='./edit.png'></img>{' '}
          </button>
        </>
      ) : (
        <>
          <ProfileForm>
            <img
              style={{ height: '9rem', width: '9rem', marginRight: '2rem' }}
              src={`https://avatars.dicebear.com/api/bottts/${newProfile}.svg`}
              alt=''
            />
            <div>
              @{' '}
              <input
                ref={firstNameRef}
                style={{ width: '8rem', borderRadius: '5px' }}
              ></input>
              -
              <input
                ref={lastNameRef}
                style={{ width: '8rem', borderRadius: '5px' }}
              ></input>
              <button
                onClick={handleSubmit}
                style={{ background: 'transparent', border: 'none' }}
              >
                <img style={ProfileButton} src='./check.png'></img>{' '}
              </button>
            </div>
          </ProfileForm>
          <ProfileName>{newProfile}</ProfileName>
        </>
      )}
    </ProfileDiv>
  )
}
