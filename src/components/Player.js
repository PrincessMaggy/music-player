import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faPlay,
    faPause,
    faAngleLeft, 
    faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player =({currentSong,songInfo,setSongInfo, isPlaying, setIsPlaying, audioRef}) =>{
   
//Event handlers
const playSongHandler =() =>{
        if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying)
            }else{
                audioRef.current.play();
                setIsPlaying(!isPlaying)
        }
};

const getTime =(time) =>{
    return(
        //formatting time
     Math.floor(time/60) + ":" + ('0' + Math.floor(time % 60)).slice(-2)
     );
};
const dragHandler=(e) =>{
    audioRef.current.currentTime =e.target.value;
   setSongInfo({...songInfo, currentTime:e.target.value})

}

return(
    <div className="player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input 
            min={0}
            onChange={dragHandler} 
            value={songInfo.currentTime}
            max={songInfo.duration} 
            type='range' />
            <p>{getTime(songInfo.duration)}</p>
        </div>

        <div className="play-control">
            <FontAwesomeIcon 
                className="skipBack"  
                size ="2x" 
                icon={faAngleLeft}/>

            <FontAwesomeIcon 
                onClick ={playSongHandler}
                className="play"  
                size ="2x"  
                icon={isPlaying? faPause: faPlay}/>

            <FontAwesomeIcon 
                className="skipForward"  
                size ="2x"  
                icon={faAngleRight}/>
            </div>
       
    </div>
)
}


export default  Player;