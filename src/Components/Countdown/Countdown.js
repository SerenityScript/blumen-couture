import React, { useState, useEffect, useCallback } from "react";
import './styleCount.css';

const Countdown = ({ targetDate }) => {
  const getTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimeLeft]);

  if (new Date(targetDate) - new Date() <= 0) {
    return <h3 className="HeadingGold">Die Black Friday-Angebote sind live!</h3>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="HeadingCountdown">Valentinstag Sale in:</h1>
      <div className="CoundownCont">
        <div className="CountdownItem">
          <h2>{timeLeft.days}</h2>
          <p>Tage</p>
        </div>
        <div className="CountdownItem">
          <h2>{timeLeft.hours}</h2>
          <p>Stunden</p>
        </div>
        <div className="CountdownItem">
          <h2>{timeLeft.minutes}</h2>
          <p>Minuten</p>
        </div>
        <div className="CountdownItem">
          <h2>{timeLeft.seconds}</h2>
          <p>Sekunden</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
