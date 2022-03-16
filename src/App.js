import React, {useState} from 'react';

//importing data
import data from './data';

//importing styles
import './styles/app.scss';

//importing components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  //state
const [songs, setSongs] = useState (data());
const [currentSong, setCurrentSong] =useState(songs[0])
  return (
    <div className="App">
      <Song currentSong ={currentSong}/>
      <Player/>
      
    </div>
  );
}

export default App;
