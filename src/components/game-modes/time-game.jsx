import { useState, useEffect, useMemo } from "react";
import Button from "../button/button";
import ClockDown from "../clock-down/clock-down";
import GameStats from "../game-stats/game-stats";
import TextBox from "../text-box/text-box";
import ClockDown2 from "../clock-down/clock-down2";

import ENGLISH_1k from "../../assets/word-lists/english-1000.json";

const generatePassage = (wordCount) => {
  const chooseList = ENGLISH_1k.words;
  const wordList = Array(wordCount)
    .fill(0)
    .map((_) => chooseList[Math.floor(Math.random() * 1000)]);
  return wordList.join(" ");
};

const TimeGame = ({ typed, setTyped, ready, setReady }) => {
  const [mode, setMode] = useState(60);
  const [customTime, setCustomTime] = useState("");
  const passage = useMemo(
    () => generatePassage(mode === "custom" ? 100 : mode * 150),
    [mode]
  );

  const handleEnter = (e, type) => {
    if (type === "enter" && e.key !== "Enter") return;

    if (parseInt(customTime) <= 604800 && parseInt(customTime) > 0)
      setMode(parseInt(customTime));
    else setMode(60);
  };

  // ensures text box is focused after mode change
  useEffect(() => {
    if (document.getElementById("text-box") && mode !== "custom") {
      document.getElementById("text-box").focus();
    }
  }, [mode]);

  return (
    <div className='flex flex-col items-center'>
      <span className='flex flex-col items-center'>
        {!typed.done ? (
          <ClockDown
            typed={typed}
            setTyped={setTyped}
            gameTime={mode === "custom" ? customTime : mode}
            ready={ready}
            setReady={setReady}
          />
        ) : (
          <GameStats typed={typed} gameTime={mode} passage={passage} />
        )}
      </span>
      <span>
        {!typed.done ? (
          <TextBox
            passage={passage}
            typed={typed}
            setTyped={setTyped}
            setReady={setReady}
            ready={ready}
            mode={mode}
          />
        ) : (
          <span />
        )}
      </span>
      <span className='grid grid-cols-5 gap-2 h-7 w-72 absolute-center text-lg'>
        {[15, 30, 60, 120].map((time, i) => (
          <Button
            key={i}
            label={time}
            mode={mode}
            setMode={setMode}
            setReady={setReady}
            setTyped={setTyped}
          />
        ))}
        {mode !== "custom" ? (
          <Button
            label={"custom"}
            mode={mode}
            setMode={setMode}
            setReady={setReady}
            setTyped={setTyped}
          />
        ) : (
          <input
            className='outline-none'
            type='number'
            value={customTime}
            onChange={(e) => setCustomTime(e.target.value)}
            onKeyDown={(e) => handleEnter(e, "enter")}
            onBlur={(e) => handleEnter(e, "blur")}
            autoFocus
          />
        )}
      </span>
    </div>
  );
};

export default TimeGame;
