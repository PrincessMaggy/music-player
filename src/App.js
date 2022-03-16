import React from 'react';
//importing styles
import './styles/app.scss';
//importing components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
      
    </div>
  );
}

export default App;
