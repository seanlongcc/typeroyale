import { useEffect, useState } from "react";

const ClockDown = ({ gameTime, typed, setTyped, ready, setReady }) => {
  const [time, setTime] = useState(gameTime);

  useEffect(() => {
    if (time <= 0 && ready) {
      setTyped(t => ({ ...t, done: true }));
    }
  }, [time, ready, setTyped]);

  useEffect(() => {
    if (!ready) setTime(gameTime);
    else {
      const timer = setInterval(() => setTime((t) => t - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [ready, setReady, gameTime, setTime]);

  useEffect(() => {
    setTime(gameTime);
  }, [gameTime]);

  return <div className='text-9xl'>{ready ? time : gameTime || "custom"}</div>;
};

export default ClockDown;
