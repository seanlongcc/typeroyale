import Caret from "../caret/caret";
import { useState, useEffect, useCallback } from "react";

const MAX_CHARS = 150;
const validChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/'\"!?@#$%^&*()_+-=<>\\|`~[]{};: ";
const validCharSet = new Set(validChars.split(""));

const TextBox = ({ passage, typed, setTyped, ready, setReady }) => {
  const [textFocused, setTextFocused] = useState(false);
  const [click, setClick] = useState(false);

  const updatePtr = useCallback(
    (end) => {
      let ptr = end + MAX_CHARS;
      while (passage[ptr] !== " " && ptr < passage.length) ptr++;
      return { start: end, end: ptr };
    },
    [passage]
  );

  const [passagePtr, setPassagePtr] = useState(updatePtr(0));

  useEffect(() => {
    if (!ready) setPassagePtr(updatePtr(0));
  }, [ready, setPassagePtr, updatePtr]);

  const handleKeyDown = (e) => {
    console.log(typed.val);
    if (e.key === "Backspace" && typed.val.length > 0) {
      setTyped({
        val: typed.val.slice(0, -1),
        keysPressed: [...typed.keysPressed, { key: e.key, time: new Date() }],
        done: false,
      });
    } else if (validCharSet.has(e.key) && typed.val.length < passage.length) {
      if (typed.val.length === 0) {
        setReady(true);
      }

      setTyped((t) => {
        return {
          val: t.val + e.key,
          keysPressed: [...t.keysPressed, { key: e.key, time: new Date() }],
          done: t.val + e.key === passage,
        };
      });

      if (
        typed.val.length + 1 === passagePtr.end &&
        typed.val.length !== passagePtr.start
      )
        setPassagePtr(updatePtr(passagePtr.end));
    }
  };

  // functon to check if text-box is focused
  const isFocused = () => {
    if (document.getElementById("text-box") === document.activeElement) {
      setTextFocused(true);
      setClick(false);
    } else {
      setTextFocused(false);
    }
  };

  // changes state when clicking button
  onmouseup = (e) => {
    setClick(!click);
  };

  // calls inFocused function whenever a mouse click is registered
  useEffect(() => {
    isFocused();
  }, [click, typed]);

  return (
    <div
      id='text-box'
      className='outline-none text-3xl box-content max-w-screen-md max-h-28 border-2 border-blue-500'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <span>
        {/* splits passage into array of single characters and maps each character to an index */}
        {passage
          .slice(passagePtr.start, passagePtr.end)
          .split("")
          .map((c, i) => {
            i += passagePtr.start;
            if (typed.val[i] === c) {
              return (
                <span key={i} className='text-green-500'>
                  {c}{textFocused && i === typed.val.length - 1 && <Caret />}
                </span>
              );
            } else if (typed.val[i]) {
              return (
                <span key={i} className='text-red-500 bg-transparent bg-red-100'>
                  {c}{textFocused && i === typed.val.length - 1 && <Caret />}
                </span>
              );
            } else {
              //returns the passage if nothing is typed, renders all at once
              return (
                <span key={i}>
                  {textFocused && typed.val.length === 0 && i === 0 && <Caret />}{c}
                </span>
              );
            }
          })}
      </span>
    </div>
  );
};

export default TextBox;
