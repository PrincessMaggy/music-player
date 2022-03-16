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
const [currentSong, setCurrentSong] =useState(songs[0]);
const [isPlaying, setIsPlaying] =useState(false);
  return (
    <div className="App">
      <Song 
        currentSong ={currentSong}/>
      <Player 
        isPlaying={isPlaying} 
        setIsPlaying ={setIsPlaying} 
        currentSong={currentSong}/>
      
    </div>
  );
}

export default App;
