import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Permanent Marker";
`;

function TextCounter({ textLength }) {
  const remainingTextLength = 140 - textLength;
  let fontColour = "black";
  if (remainingTextLength < 0) {
    fontColour = "red";
  }

  return (
    <StyledDiv style={{ color: fontColour }}>{remainingTextLength}</StyledDiv>
  );
}

export default TextCounter;
