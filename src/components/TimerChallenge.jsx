import { useState, useRef } from "react";

export default function TimerChallenge({title,targerTime}) {
  const timerRef = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimeExpired] = useState(false);

  function handleStart(){
 
    timerRef.current = setTimeout(() => {
      setTimeExpired(() => true)
    },targerTime * 1000);

    setTimerStarted(() => true);
  }

  function handleStop(){
    clearTimeout(timerRef.current);
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>You lost!</p>}
    <p className="challenge-time">
      {targerTime} second{targerTime > 1 ? 's' : ''}
    </p>
    <p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? 'Stop' : 'Start'} Challenge
      </button>
    </p>
    <p className={timerStarted ? 'active' : undefined}>
      {timerStarted ? 'Time is running....' : 'Timer inactive'}
    </p>
  </section>;
}