import React from 'react';
import './LyricLetter.scss';

const LyricLetter = props => {
    return (
        <div className="lyricLetter">
            <pre>
                {props.songLetter}
            </pre>
            <button className="-btngoback" onClick={props.handleBackButton}>Voltar</button>
        </div>
    );
};

export default LyricLetter;