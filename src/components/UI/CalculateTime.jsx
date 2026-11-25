import React, { useEffect, useState } from "react";

const CalculateTime = ({ time }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1);

  useEffect(() => {
    let cancelId;

    function startTimer() {
      cancelId = requestAnimationFrame(updateTimer);
    }

    function updateTimer() {
      const remaining = Math.max(0, time - Date.now());

      setTimeLeft(remaining);

      setHours(Math.floor(remaining / 1000 / 60 / 60));
      setMinutes(Math.floor(remaining / 1000 / 60) % 60);
      setSeconds(Math.floor((remaining / 1000) % 60));

      if (remaining > 0) {
        cancelId = requestAnimationFrame(updateTimer);
      }
    }

    startTimer();

    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, [time]);

  return (
    <div className="de_countdown">
      {timeLeft <= 0 ? (
        <span>EXPIRED</span>
      ) : (
        <>
          <span className="hours">{hours}h </span>
          <span className="minutes">{minutes}m </span>
          <span className="seconds">{seconds}s </span>
        </>
      )}
    </div>
  );
};

export default CalculateTime;
