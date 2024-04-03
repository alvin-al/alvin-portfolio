import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Fragments/Preloader';

import Homepage from './pages/Homepage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App flex p-4 bg-[#171717] flex-col !scroll-smooth">

      {isLoading ? (
        <Loader />
      ) : (
          <>
            <Homepage />
          </>
      )}
      
    </div>
  );
}

export default App;