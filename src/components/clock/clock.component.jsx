import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
  });

  return <div>{time}</div>;
};

export default Clock;
