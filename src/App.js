import React from 'react';

import './App.css';
import LaunchList from './components/launch-list';
import Filters from './components/filters';

function App() {
  return (
    <div className="App">
      <h1>SpaceX Launch Programs</h1>
      <div className='container'>
        <Filters />
        <LaunchList  />
      </div>
    </div>
  );
}

export default App;
