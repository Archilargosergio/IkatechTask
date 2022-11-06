import React from 'react';
import Home from '../Pages/Home';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <div>
      < AppContext.Provider value={initialState} >
        < Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
