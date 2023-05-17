import React, { useState, useEffect } from 'react';
import './TestAdmin.css';
import Countdown from './Countdown';
import ScoreScreen from './ScoreScreen';

const TestAdmin = () => {
  const testData = [
    { level: 1, shuttles: 7, speed: 8.0, shuttleTime: 9.0, totalTime: 63.0, distance: 140 },
    { level: 2, shuttles: 8, speed: 9.0, shuttleTime: 8.0, totalTime: 64.0, distance: 160 },
    { level: 3, shuttles: 8, speed: 9.5, shuttleTime: 7.58, totalTime: 60.63, distance: 160 },
    { level: 4, shuttles: 9, speed: 10.0, shuttleTime: 7.20, totalTime: 64.80, distance: 180 },
    { level: 5, shuttles: 9, speed: 10.5, shuttleTime: 6.86, totalTime: 61.71, distance: 180 },
    { level: 6, shuttles: 10, speed: 11.0, shuttleTime: 6.55, totalTime: 65.50, distance: 200 },
    { level: 7, shuttles: 10, speed: 11.5, shuttleTime: 6.26, totalTime: 62.61, distance: 200 },
    { level: 8, shuttles: 11, speed: 12.0, shuttleTime: 6.00, totalTime: 66.00, distance: 220 },
    { level: 9, shuttles: 11, speed: 12.5, shuttleTime: 5.76, totalTime: 63.36, distance: 220 },
    { level: 10, shuttles: 11, speed: 13.0, shuttleTime: 5.54, totalTime: 60.92, distance: 220 },
    { level: 11, shuttles: 12, speed: 13.5, shuttleTime: 5.33, totalTime: 64.00, distance: 240 },
    { level: 12, shuttles: 12, speed: 14.0, shuttleTime: 5.14, totalTime: 61.71, distance: 240 },
    { level: 13, shuttles: 13, speed: 14.5, shuttleTime: 4.97, totalTime: 64.55, distance: 260 },
    { level: 14, shuttles: 13, speed: 15.0, shuttleTime: 4.80, totalTime: 62.40, distance: 260 },
    { level: 15, shuttles: 13, speed: 15.5, shuttleTime: 4.65, totalTime: 60.39, distance: 260 },
    { level: 16, shuttles: 14, speed: 16.0, shuttleTime: 4.50, totalTime: 63.00, distance: 280 },
    { level: 17, shuttles: 14, speed: 16.5, shuttleTime: 4.36, totalTime: 61.09, distance: 280 },
    { level: 18, shuttles: 15, speed: 17.0, shuttleTime: 4.24, totalTime: 63.53, distance: 300 },
    { level: 19, shuttles: 15, speed: 17.5, shuttleTime: 4.11, totalTime: 61.71, distance: 300 },
    { level: 20, shuttles: 16, speed: 18.0, shuttleTime: 4.00, totalTime: 64.00, distance: 320 },
    { level: 21, shuttles: 16, speed: 18.5, shuttleTime: 3.89, totalTime: 62.27, distance: 320 },
    ];

  const [currentShuttle, setCurrentShuttle] = useState({ level: 1, iteration: 1 });
  const [timeRemaining, setTimeRemaining] = useState(testData[0].shuttleTime);
  const [cumulativeTime, setCumulativeTime] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [testStopped, setTestStopped] = useState(false); // Add testStopped state

  useEffect(() => {
    let interval;

    if (testStarted && countdown === 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            handleNextShuttle();
            return testData[currentShuttle.level - 1].shuttleTime; // Return the time for the next shuttle
          }
          return prevTime - 0.01;
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [testStarted, countdown, currentShuttle]); // Added currentShuttle to the dependency array

  useEffect(() => {
    let countdownInterval;

    if (testStarted && countdown > 0) {
      countdownInterval = setInterval(() => {
        playAudioDing(countdown); // Play audio ding on each second of the countdown
        setCountdown((prevCountdown) => prevCountdown - 1);        
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(countdownInterval);
      setTimeRemaining(testData[currentShuttle.level - 1].shuttleTime); // Set the time remaining based on the current shuttle
      playAudioDing(currentShuttle.level); // Play audio ding at the beginning of each interval
    }

    return () => clearInterval(countdownInterval);
  }, [countdown, testStarted, currentShuttle]); // Added currentShuttle to the dependency array

    
      
  
      const handleNextShuttle = () => {
        const currentLevel = currentShuttle.level;
        const currentIteration = currentShuttle.iteration;
      
        if (currentIteration === testData[currentLevel - 1].shuttles) {
          if (currentLevel === testData.length) {
            console.log('Test Completed');
            // Add logic to handle the completion of the test
          } else {
            setCurrentShuttle({ level: currentLevel + 1, iteration: 1 });
            setTimeRemaining(testData[currentLevel].shuttleTime); // Changed from currentLevel to currentLevel - 1
            setCumulativeTime((prevTime) => prevTime + testData[currentLevel - 1].shuttleTime);
          }
        } else {
          setCurrentShuttle({ level: currentLevel, iteration: currentIteration + 1 });
          setTimeRemaining(testData[currentLevel - 1].shuttleTime); // Removed -1
          setCumulativeTime((prevTime) => prevTime + testData[currentLevel - 1].shuttleTime);
        }
      };     
      
    

      const playAudioDing = (level, seconds) => {
        let audioFile;
      
        if (seconds === 0) {
          // Path to the audio file for the beginning of the interval
          audioFile = require('../assets/intervalSound.wav');
        } else {
          // Path to the audio file for each second of the countdown
          audioFile = require('../assets/samplesound.wav');
        }
      
        // Create an Audio object and play the audio file
        const audio = new Audio(audioFile);
        audio.play();
      };
      
      
      
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      };
  
    const startTest = () => {
      setTestStarted(true);
      setCurrentShuttle({ level: 1, iteration: 1 });
      setCumulativeTime(0);
      setTimeRemaining(testData[0].shuttleTime);
      setCountdown(5);
    };
  
    const stopTest = () => {
      setTestStarted(false);
      setTestStopped(true);
    };
  
    const restartTest = () => {
      setTestStarted(false);
      setTestStopped(false);
      setCurrentShuttle({ level: 1, iteration: 1 });
      setCumulativeTime(0);
      setTimeRemaining(testData[0].shuttleTime);
      setCountdown(0);
    };

    

    return (
        <div className='test-admin'>
          <h2>HAMR Time</h2>
          {countdown > 0 ? (
            <p>Countdown: {countdown}</p>
          ) : (
            <>
              {testStarted && !testStopped && (
                <>
                  <p>Time Remaining: {timeRemaining.toFixed(2)}</p>
                  <p>
                    Current Shuttle: Level {currentShuttle.level}, Iteration {currentShuttle.iteration}
                  </p>
                  <p>Cumulative Time: {formatTime(cumulativeTime)}</p>
                  <button onClick={stopTest}>Stop Test</button>
                </>
              )}
              {!testStarted && !testStopped && (
                <button onClick={startTest}>Start Test</button>
              )}
              {testStopped && (
                <div>
                  <h2>Test Stopped</h2>
                  <p>Last Completed Shuttle: Level {currentShuttle.level}, Iteration {currentShuttle.iteration - 1}</p>
                  <button onClick={restartTest}>Restart Test</button>
                </div>
              )}
            </>
          )}
        </div>
      );
        
  
};

export default TestAdmin;
