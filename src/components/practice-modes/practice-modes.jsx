import { useState, useEffect } from "react";
import { waitFor } from "@testing-library/react";

import Button from "../button/button";
import TimeGame from "../game-modes/time-game";
import WordsGame from "../game-modes/words-game";
import PassageGame from "../game-modes/passage-game";
import CustomGame from "../game-modes/custom-game.jsx";

import ENGLISH_200 from "../../assets/word-lists/english-200.json";
import ENGLISH_1k from "../../assets/word-lists/english-1000.json";

const Passage = () => {
  //temp
  const wordCount = 100;
  const chooseList = ENGLISH_200.words;
  const wordList = [];
  let passage = "";

  for (let i = 1; i <= wordCount; i++) {
    const word = chooseList[Math.floor(Math.random() * 200)];
    wordList.push(word);
    passage = wordList.join(" ");
  }
  console.log("im in");
  return passage;
};

const PracticeModes = () => {
  const [mode, setMode] = useState("time");
  const [ready, setReady] = useState(false);
  const [typed, setTyped] = useState({ val: "", keysPressed: [], done: false });
  const [caps, setCaps] = useState(false);

  // time is default since state starts as time
  const renderMode = () => {
    switch (mode) {
      case "words":
        return (
          <WordsGame
            ready={ready}
            setReady={setReady}
            typed={typed}
            setTyped={setTyped}
            passage={Passage()}
          />
        );
      case "time":
        return (
          <TimeGame
            ready={ready}
            setReady={setReady}
            typed={typed}
            setTyped={setTyped}
            passage={Passage()}
          />
        );
      case "passage":
        return <PassageGame />;
      case "custom":
        return <CustomGame />;
      default:
        return <div />;
    }
  };

  // checks if caps is on
  onkeydown = (e) => {
    if (e.getModifierState("CapsLock")) {
      setCaps(true);
    } else {
      setCaps(false);
    }
  };

  const nextGame = async () => {
    setReady(false);
    setTyped({ val: "", keysPressed: [], done: false });
    await waitFor(() => document.querySelector("text-box"));
    document.getElementById("text-box").focus();
  };

  return (
    <div className='flex flex-col items-center'>
      <span className='text-5xl animate-bounce'>
        {caps && <span>Caps Lock</span>}
      </span>
      <span tabIndex={0} className='outline-none'>
        {renderMode()}
      </span>
      <span className='grid grid-cols-4 text-lg'>
        {["time", "words", "passage", "custom"].map((label, i) => (
          <Button
            key={i}
            label={label}
            mode={mode}
            setMode={setMode}
            setReady={setReady}
            setTyped={setTyped}
          />
        ))}
      </span>
      <span className={typed.done ? "flex flex-col items-center" : "hidden"}>
        <button
          className='text-2xl font-bold hover:text-gray-400 hover:animate-pulse'
          onClick={() => {
            nextGame();
          }}
        >
          tab + enter - next test
        </button>
      </span>
      <span className={!typed.done ? "flex flex-col items-center" : "hidden"}>
        <button
          className='text-2xl font-bold hover:text-gray-400 hover:animate-pulse'
          onClick={() => {
            setReady(false);
            setTyped({ ...typed, done: false });
            setTyped({ val: "", keysPressed: [], done: false });
            document.getElementById("text-box").focus();
          }}
        >
          tab + enter - restart test
        </button>
      </span>
      <span></span>
    </div>
  );
};

export default PracticeModes;
