import PracticeModes from "../components/practice/practice-modes.component";
import Clock from "../components/clock/clock.component";
import { useState } from "react";

const Practice = () => {
  const [ready, setReady] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="grid gap-y-52 text-5xl">{ready && <Clock />}</span>
      <span className="grid text-3xl">PRACTICE TEXT HERE</span>
      <PracticeModes />
      <button onClick={() => setReady(!ready)}>start</button>
    </div>
  );
};

export default Practice;
