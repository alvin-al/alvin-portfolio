import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Fragments/Preloader';

import Homepage from './pages/Homepage';

function App() {
   const [showLoader, setShowLoader] = useState(true);
   document.body.classList.add('no-scroll');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      document.body.classList.remove('no-scroll');
    }, 5000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App flex p-4 bg-[#171717] flex-col">
      {showLoader && <Loader />}
      <Homepage />
    </div>
  );
}

export default App;
