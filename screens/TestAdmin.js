import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import ScoreScreen from './ScoreScreen';

  const TestAdmin = () => {
    const testData = [
      { level: 1, shuttles: 7, speed: 8.0, shuttleTime: 9.0, totalTime: 63.0, distance: 140 },
      { level: 2, shuttles: 8, speed: 9.0, shuttleTime: 8.0, totalTime: 64.0, distance: 160 },
      // Add other test data rows here...
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
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);
        } else if (countdown === 0) {
          clearInterval(countdownInterval);
          setTimeRemaining(testData[currentShuttle.level - 1].shuttleTime); // Set the time remaining based on the current shuttle
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
        <div>
          <h2>Test Administration</h2>
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
                  <button onClick={handleNextShuttle}>Next Shuttle</button>
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
