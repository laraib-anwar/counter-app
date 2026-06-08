import React, {useState, useEffect} from "react";
import './timer.css';

const Timer = ()=> {
	const [started, setStarted] = useState(false);
	const [hours, setHours] = useState(10);
	const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(60);
	
			useEffect(() => {
        if (!started) return;

        const id = setInterval(() => {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else {
            if (minutes > 0) {
              setMinutes((prev) => prev - 1);
              setSeconds(59);
            } else {
              if (hours > 0) {
                setHours((prev) => prev - 1);
                setMinutes(59);
                setSeconds(59);
              } else {
                clearInterval(id);
              }
            }
          }
        }, 100);

        return () => clearInterval(id);
      }, [started, hours, minutes, seconds]);
	const startClick = ()=> {
		setStarted(true);		
	}
	const pauseClick = () => {
   
  };
	const resumeClick = () => {};
	return (
    <>
      <div className="container">
        <h1>Countdown Timer</h1>
        <div className="timeBox">
          <div className="t ">{hours}</div>
          <span>:</span>
          <div className="t ">{minutes}</div>
          <span>:</span>
          <div className="t ">{seconds}</div>
          <div>
            {started ? (
              <div className="buttonGroup">
                <button onClick={pauseClick}>Pause</button>

                <button onClick={resumeClick}>Resume</button>
              </div>
            ) : (
              <button onClick={startClick}>Start</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;