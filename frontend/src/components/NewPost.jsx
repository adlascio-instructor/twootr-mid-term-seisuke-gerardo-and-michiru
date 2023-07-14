import { useState } from "react";
import TextCounter from "./TextCounter";
import TwootButton from "./TwootButton";
import { axiosInstance } from "../axios";

export default function NewPost() {
  const [twootInput, setTwootInput] = useState("");

  const handleOnchange = (e) => {
    setTwootInput(e.target.value);
  };

  const textLength = twootInput.length;

  //get date and encode to yyyy-mm-dd
  let date = new Date().toISOString();
  date = date.split("T")[0];

  const newTwoot = {
    newTwoot: {
      author: "Henry David Thoreau",
      content: twootInput,
      authorSlug: "henry-david-thoreau",
      dateAdded: date,
    },
  };

  const handleOnclick = async () => {
    await axiosInstance.post("/twoot", newTwoot);
    setTwootInput("");
  };

  return (
    <div>
      <h2>Compose Twoot</h2>
      <input
        type="text"
        value={twootInput}
        onChange={(e) => {
          handleOnchange(e);
        }}
      />
      <TwootButton onClick={handleOnclick} />
      <TextCounter textLength={textLength} />
    </div>
  );
}
