import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Permanent Marker";
  border: none;
  border-radius: 6px;
  color: white;
  width: 95px;
  height: 30px;
  background-color: ${(props) => (props.disabled ? "#c9659361" : "#c96593")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

function TwootButton({ onClick, isDisabled }) {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      TWOOT
    </StyledButton>
  );
}

export default TwootButton;
