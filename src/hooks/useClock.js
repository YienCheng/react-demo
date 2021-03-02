import { useState, useEffect } from "react";

function useClock() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setTimeout(tick, 1000);

    return () => {
      clearTimeout(timerID);
    };
  });

  return date;
}

export default useClock;
