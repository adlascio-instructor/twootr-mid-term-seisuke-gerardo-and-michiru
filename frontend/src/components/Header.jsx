import React from 'react';
import styled from 'styled-components';


const HeaderBar = styled.div`
  background-color: #711a75;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Title = styled.h1`
  font-family: "Permanent Marker";
  font-size: 1.4rem;
  margin: 0;
`;

const HeaderLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const HeaderTwootBtn = styled.li`
  margin-left: 10px;
`;

export default function Header({buttonRef}) {
  const focusClick = () => {
    buttonRef.current.focus();
  }

  return (
    <HeaderBar>
      <Title>Twootr</Title>
      <HeaderLinks>
        <HeaderTwootBtn onClick={focusClick}>Write a new Twoot</HeaderTwootBtn>
      </HeaderLinks>
    </HeaderBar>
  )
}
