import { useState, useEffect } from "react";

function useClock(initState) {
  const [date, setDate] = useState(initState);

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(tick, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  /**
   * useEffect(() => {})
   * 在组件挂载和更新时调用
   *
   * useEffect(() => {}, [])
   * 仅在组件挂载时调用
   *
   * useEffect(() => {}, [state1， state2])
   * 会对state1 和 state2 进行比较，如果发生变更时调用
   *
   * useEffect(() => {
   *   return () => {}
   * })
   * 返回的函数为清除函数，每当组件卸载时都会调用
   */

  return date;
}

export default useClock;
