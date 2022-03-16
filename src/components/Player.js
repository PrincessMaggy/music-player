import React,{useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay,faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player =({currentSong}) =>{
    //Ref
    const audioRef = useRef(null);
//Event handlers
const playSongHandler =() =>{

}


return(
    <div className="player">
        <div className="time-control">
            <p>Start time</p>
            <input type='range' />
            <p>End time</p>
        </div>
        <div className="play-control">
        <FontAwesomeIcon className="skipBack"  size ="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick ={playSongHandler} className="play"  size ="2x"  icon={faPlay}/>
        <FontAwesomeIcon className="skipForward"  size ="2x"  icon={faAngleRight}/>
        </div>
        <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
)
}


export default  Player;