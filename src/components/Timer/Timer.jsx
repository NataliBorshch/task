import { useState, useEffect, useRef } from 'react';
import './Timer.scss';

export default function Timer() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div className="section_timer">
      <p className="timer"> {time.toLocaleTimeString()}</p>
    </div>
  );
}
