import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    y: [48, 0, 48],
    duration: 5,
    opacity: 100,
    bounce: 0,
  },
};

function App() {
  const [result, setResult] = useState("");
  const [rivalChoice, setRivalChoice] = useState("");
  const rivalArray = ["rock", "paper", "scissors"];
  const [playersChoice, setPlayersChoice] = useState("");
  const [showImg, setShowImg] = useState("hidden");

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
    setShowImg(`shown${yourChoice}`);
  };

  console.log(showImg);

  return (
    <div className="App">
      <a href="/" className="play-button">
        Let's play!
      </a>
      <div className="player-choices">
        <div className="rock-choice">
          <motion.img
            src="./src/assets/therock.png"
            className="img"
            variants={imgVariants}
            initial={showImg === "hidden" ? "hidden" : false}
            animate={showImg === "shownrock" ? "shown" : "hidden"}
            onAnimationComplete={() => setShowImg("hidden")}
          />
          <motion.button
            onClick={battleIsOn}
            value="rock"
            className="button"
            whileHover={{ backgroundColor: "palevioletred", scale: 1.1 }}
            whileTap={{ backgroundColor: "darkgray" }}
          >
            Rock
          </motion.button>
        </div>
        <div className="paper-choice">
          <motion.img
            src="./src/assets/paper.png"
            className="img"
            variants={imgVariants}
            initial={showImg === "hidden" ? "hidden" : false}
            animate={showImg === "shownpaper" ? "shown" : "hidden"}
            onAnimationComplete={() => setShowImg("hidden")}
          />
          <motion.button
            onClick={battleIsOn}
            value="paper"
            className="button"
            whileHover={{ backgroundColor: "palevioletred", scale: 1.1 }}
            whileTap={{ backgroundColor: "lightgray" }}
          >
            Paper
          </motion.button>
        </div>
        <div className="scissors-choice">
          <motion.img
            src="./src/assets/scissors.png"
            className="img"
            variants={imgVariants}
            initial={showImg === "hidden" ? "hidden" : false}
            animate={showImg === "shownscissors" ? "shown" : "hidden"}
            onAnimationComplete={() => setShowImg("hidden")}
          />
          <motion.button
            onClick={battleIsOn}
            value="scissors"
            className="button"
            whileHover={{ backgroundColor: "palevioletred", scale: 1.1 }}
            whileTap={{ backgroundColor: "lightblue" }}
          >
            Scissors
          </motion.button>
        </div>
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
