import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling face with eyes",
  "😂": "face with tears of joy",
  "🤣": "rolling on the floor laughing",
  "❤": "heart",
  "😍": "smiling face with heart eyes",
  "😒": "unamused face",
  "😘": "face blowing a kiss",
  "😁": "beaming face with smiling eyes",
  "😉": "winking face",
  "😎": "smiling face with sunglasses",
  "😢": "crying face",
  "😜": "winking face with tongue",
  "😆": "grinning squinting face",
  "🙄": "face with rolling eyes",
  "😠": "angry face",
  "😭": "loudly crying face",
  "😑": "expression less face",
  "🤐": "zipper mouth face",
  "😪": "sleepy face",
  "😶": "face without mouth",
  "🥰": "smilimg face with heart",
  "🥱": "yawning face",
  "😣": "persevering face",
  "😮": "face with open mouth",
  "🙃": "upside down face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "sorry, couldn't find!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  var color = "blue";

  return (
    <div className="App">
      <h1 style={{ color }}>Search Emojiii</h1>
      <input onChange={emojiHandler} />

      <div id="output">
        {" "}
        <h3>{meaning}</h3>{" "}
      </div>

      <h2> emojis we know :) </h2>
      <h3> click on me and find my name!</h3>
      {emojisWeKnow.map((item) => {
        return (
          <button
            onClick={() => emojiClickHandler(item)}
            style={{
              fontSize: "1.6rem",
              padding: "1rem",
              backgroundColor: "rgba(252, 165, 165)",
              borderRadius: "2rem",
              border: ".2rem",
              margin: ".5rem",
              cursor: "pointer"
            }}
            key={item}
          >
            {" "}
            {item}{" "}
          </button>
        );
      })}
      <footer style={{ padding: "1.5rem" }}>
        If you are giving input through laptop. Please use (win + ,) or (win +
        .)
      </footer>
    </div>
  );
}
