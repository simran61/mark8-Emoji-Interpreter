import React, { useState } from "react";
import "./styles.css";
import pic from "./pic.png";

const emojiDictionary = {
  "👋": "Waving Hand",
  "✋": "Raised Hand",
  "👌": "Ok Hand",
  "✌️": "Victory Hand",
  "✍️": "Writing Hands",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👏": "Clapping Hands",
  "👐": "Open Hands",
  "🙌": "Raising Hands",
  "🙏": "Folded Hands",
  "🤝": "Handshake"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops ! We don't have this in our database 😅";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav>Honest Emoji</nav>

      <div className="para">
        Do you also find it hard to figure out the meaning of emojis ?🤔 So
        here's a emoji dictionary for you, wherein you can enter an emoji and we
        will tell you its meaning in seconds.😎
      </div>

      <p>Isn't it cool guys!!</p>
      <img src={pic} alt="pic" />
      <input
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      />

      <h2>{meaning}</h2>

      <p style={{ color: "black" }}>Emojis we know</p>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div style={{ margin: "2rem" }}></div>
    </div>
  );
}
