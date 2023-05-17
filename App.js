import React from 'react';
import TestAdmin from './screens/TestAdmin';
import backgroundImage from './assets/background_img.png';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top', // Adjusted property
    minHeight: '100vh',
    width: '100%',
  },
};

export default function App() {
  return (
    <div style={styles.container}>
      <TestAdmin />
    </div>
  );
}
