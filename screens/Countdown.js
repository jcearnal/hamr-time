import React, { useState, useEffect } from 'react';

const Countdown = ({ onFinish }) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let countdownInterval;

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(countdownInterval);
      onFinish();
    }

    return () => clearInterval(countdownInterval);
  }, [countdown, onFinish]);

  return <p>Countdown: {countdown}</p>;
};

export default Countdown;
