import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [rivalChoice, setRivalChoice] = useState("");
  const rivalArray = ["rock", "paper", "scissors"];
  const [playersChoice, setPlayersChoice] = useState("");

  useEffect(() => {
    if (playersChoice === "rock") {
      if (rivalChoice === "paper") {
        setResult("You lose :(");
      } else if (rivalChoice === "scissors") {
        setResult("You win :)");
      } else if (rivalChoice === "rock") {
        setResult("It's a Draw!");
      }
    } else if (playersChoice === "paper") {
      if (rivalChoice === "paper") {
        setResult("It's a Draw!");
      }
      if (rivalChoice === "scissors") {
        setResult("You lose :(");
      }
      if (rivalChoice === "rock") {
        setResult("You win :)");
      }
    } else if (playersChoice === "scissors") {
      if (rivalChoice === "paper") {
        setResult("You win :)");
      } else if (rivalChoice === "scissors") {
        setResult("It's a Draw!");
      } else if (rivalChoice === "rock") {
        setResult("You lose :(");
      }
    }
  }, [rivalChoice, playersChoice]);

  const battleIsOn = (ev) => {
    let yourChoice = ev.target.value;
    setPlayersChoice(yourChoice);
    setRivalChoice(rivalArray[Math.floor(Math.random() * rivalArray.length)]);
  };
  return (
    <div className="App">
      <a href="/" className="play-button">
        Let's play!
      </a>
      <div className="player-choices">
        <div className="rock-choice">
          <img src="./src/assets/therock.png" className="img" />
          <button onClick={battleIsOn} value="rock" className="button">
            Rock
          </button>
        </div>
        <button onClick={battleIsOn} value="paper" className="button">
          Paper
        </button>
        <button onClick={battleIsOn} value="scissors" className="button">
          Scissors
        </button>
      </div>
      <div className="battlefield">
        <p className="rival-choice">
          {rivalChoice ? `Your rival chose ${rivalChoice}.` : null}
        </p>
      </div>
      <div className="result-div">
        <p>{result ? "Who won?" : null}</p>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
