import { useState } from "react";
import { waitFor } from "@testing-library/react";

import Button from "../button/button";
import TimeGame from "../game-modes/time-game";
import WordsGame from "../game-modes/words-game";
import QuoteGame from "../game-modes/quote-game";
import GibberishGame from "../game-modes/gibberish-game.jsx";

const PracticeModes = () => {
  const [mode, setMode] = useState("time");
  const [ready, setReady] = useState(false);
  const [typed, setTyped] = useState({ val: "", keysPressed: [], done: false });
  const [caps, setCaps] = useState(false);
  const [reset, setReset] = useState(0);

  // time is default since state starts as time
  const renderMode = () => {
    switch (mode) {
      case "words":
        return (
          <WordsGame
            reset={reset}
            ready={ready}
            setReady={setReady}
            typed={typed}
            setTyped={setTyped}
          />
        );
      case "time":
        return (
          <TimeGame
            reset={reset}
            ready={ready}
            setReady={setReady}
            typed={typed}
            setTyped={setTyped}
          />
        );
      case "quotes":
        return (
          <QuoteGame
            reset={reset}
            ready={ready}
            setReady={setReady}
            typed={typed}
            setTyped={setTyped}
          />
        );
      case "gibberish":
        return (
          <GibberishGame
            reset={reset}
            ready={ready}
            setReady={setReady}
            typed={typed}
            setTyped={setTyped}
          />
        );
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
    setReset((r) => r + 1);
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
      <div className='grid grid-cols-4 gap-1 text-lg h-7'>
        {["time", "words", "quotes", "gibberish"].map((label, i) => (
          <Button
            key={i}
            label={label}
            mode={mode}
            setMode={setMode}
            setReady={setReady}
            setTyped={setTyped}
          />
        ))}
      </div>
      <span className={"flex flex-col items-center"}>
        <button
          className='text-2xl font-bold hover:text-gray-400 hover:animate-pulse mt-5'
          onClick={nextGame}
        >
          tab + enter - {typed.done ? "next test" : "restart test"}
        </button>
      </span>
    </div>
  );
};

export default PracticeModes;
