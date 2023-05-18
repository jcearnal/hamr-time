import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react';
import './TestAdmin.css';
import Countdown from './Countdown';
import ScoreScreen from './ScoreScreen';
import backgroundImage from '../assets/background_img.png';

const TestAdmin = () => {
  const testData = [
    { level: 1, shuttles: 7, speed: 8.0, shuttleTime: 9.0 },
    { level: 2, shuttles: 8, speed: 9.0, shuttleTime: 8.0 },
    { level: 3, shuttles: 8, speed: 9.5, shuttleTime: 7.58 },
    { level: 4, shuttles: 9, speed: 10.0, shuttleTime: 7.20 },
    { level: 5, shuttles: 9, speed: 10.5, shuttleTime: 6.86 },
    { level: 6, shuttles: 10, speed: 11.0, shuttleTime: 6.55 },
    { level: 7, shuttles: 10, speed: 11.5, shuttleTime: 6.26 },
    { level: 8, shuttles: 11, speed: 12.0, shuttleTime: 6.00 },
    { level: 9, shuttles: 11, speed: 12.5, shuttleTime: 5.76 },
    { level: 10, shuttles: 11, speed: 13.0, shuttleTime: 5.54 },
    { level: 11, shuttles: 12, speed: 13.5, shuttleTime: 5.33 },
    // { level: 12, shuttles: 12, speed: 14.0, shuttleTime: 5.14 },
    // { level: 13, shuttles: 13, speed: 14.5, shuttleTime: 4.97 },
    // { level: 14, shuttles: 13, speed: 15.0, shuttleTime: 4.80 },
    // { level: 15, shuttles: 13, speed: 15.5, shuttleTime: 4.65 },
    // { level: 16, shuttles: 14, speed: 16.0, shuttleTime: 4.50 },
    // { level: 17, shuttles: 14, speed: 16.5, shuttleTime: 4.36 },
    // { level: 18, shuttles: 15, speed: 17.0, shuttleTime: 4.24 },
    // { level: 19, shuttles: 15, speed: 17.5, shuttleTime: 4.11 },
    // { level: 20, shuttles: 16, speed: 18.0, shuttleTime: 4.00 },
    // { level: 21, shuttles: 16, speed: 18.5, shuttleTime: 3.89 },
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
      
        if (currentLevel === 11 && currentIteration === 12) {
          console.log('Maximum points reached. Test Completed');
          stopTest(); // Call the stopTest function to stop the test
          return;
        }
      
        if (currentIteration === testData[currentLevel - 1].shuttles) {
          if (currentLevel === testData.length) {
            console.log('Test Completed');
            // Add logic to handle the completion of the test
          } else {
            setCurrentShuttle({ level: currentLevel + 1, iteration: 1 });
            setTimeRemaining(testData[currentLevel].shuttleTime);
            setCumulativeTime((prevTime) => prevTime + testData[currentLevel - 1].shuttleTime);
          }
        } else {
          setCurrentShuttle({ level: currentLevel, iteration: currentIteration + 1 });
          setTimeRemaining(testData[currentLevel - 1].shuttleTime);
          setCumulativeTime((prevTime) => prevTime + testData[currentLevel - 1].shuttleTime);
        }
      };
      
      
    

      const playAudioDing = (seconds) => {
        let audioFile;
      
        if (seconds === 0) {
          // Path to the audio file for the beginning of the interval
          audioFile = require('../assets/samplesound.wav');
        } else {
          // Path to the audio file for each second of the countdown
          audioFile = require('../assets/samplesound.wav');
        }
      
        // Create an Audio object and play the audio file
        const audio = new Audio(audioFile);
        audio.play().catch((error) => {
          // Handle the error here, such as logging or displaying a message to the user
          console.error('Error playing audio:', error);
        });
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
        setCountdown(3);
        
        // Play audio on start test
        playAudioDing(0);
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

    const ProgressBar = ({ progress }) => {
      return (
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      );
    };

    

    return (
      <div className='test-admin' style={{ textAlign: 'center' }}>
        <h1>HAMR Time</h1>
        {countdown > 0 ? (
          <p>Countdown: {countdown}</p>
        ) : (
          <>
            {testStarted && !testStopped && (
              <>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${(timeRemaining / testData[currentShuttle.level - 1].shuttleTime) * 100}%` }}
                  />
                </div>
                <h1 className='green'>{timeRemaining.toFixed(2)}</h1>
                <p>Current Shuttle:</p>
                  
                <h3>Level {currentShuttle.level}, Shuttle {currentShuttle.iteration}</h3>
                
                {/* <p>Total Time - Last Completed Shuttle <br></br> {formatTime(cumulativeTime)}</p> */}
                <button onClick={stopTest}>Stop Test</button>
              </>
            )}
            {!testStarted && !testStopped && (
              <button onClick={startTest}>Start Test</button>
            )}
            {testStopped && (
              <div>
                <h2 className={testStopped ? 'test-stopped' : ''}>Test Complete!</h2>
                <p>Great work!</p>
                <p>Final Score: <strong>Level {currentShuttle.level}, Shuttle {currentShuttle.iteration - 1}</strong></p>
                <p>Total Shuttles Completed: {currentShuttle.level * (currentShuttle.iteration - 1)}</p>
    
                <button onClick={restartTest}>Restart Test</button>
              </div>
            )}
          </>
        )}
      </div>
    ); 
  
};

export default TestAdmin;
