import React from 'react';
import './LyricList.scss';

const LyricList = props => {
    return (
        <div className="lyricList">
            {props.songList.map((song, key) => {
            return (<button className="-songname" key={key} onClick={() => props.handleMusicSelected(song)}>{song.title} </button>);
            })}
        </div>
    )
}

export default LyricList;