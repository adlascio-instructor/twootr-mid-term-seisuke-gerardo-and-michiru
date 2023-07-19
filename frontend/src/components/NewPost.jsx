import { useState } from "react";
import TextCounter from "./TextCounter";
import TwootButton from "./TwootButton";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import Header from "./Header";

const StyledInput = styled(TextareaAutosize)`
  border: none;
  border-bottom: 1px solid;
  background-color: inherit;
  width: 80%;
  resize: none;
  font-family: "Kanit";
`;

const StyledDiv = styled.div`
  margin: 10px 3rem;
`;

const ComposeArea = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function NewPost({ addNewPost }) {
  const [twootInput, setTwootInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOnchange = (e) => {
    const inputValue = e.target.value;
    setTwootInput(inputValue);

    //validation
    if (inputValue.length >= 1 && inputValue.length <= 140) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleOnclick = async () => {
    //get date and encode to yyyy-mm-dd
    const date = new Date().toISOString().split("T")[0];
    const newTwoot = {
      newTwoot: {
        author: "Henry David Thoreau", //get gerodo data
        content: twootInput,
        authorSlug: "henry-david-thoreau",
        dateAdded: date,
      },
    };
    await addNewPost(newTwoot);
    setTwootInput("");
    setIsDisabled(true);
  };

  return (
    <StyledDiv>
      <ComposeArea>
        <h2>Compose Twoot</h2>
        <ControlsContainer>
          <TextCounter textLength={twootInput.length} />
          <TwootButton onClick={handleOnclick} isDisabled={isDisabled} />
        </ControlsContainer>
      </ComposeArea>
      <StyledInput
        type="text"
        value={twootInput}
        onChange={(e) => {
          handleOnchange(e);
        }}
        placeholder="What are you humming about?"
      />
    </StyledDiv>
  );
}
