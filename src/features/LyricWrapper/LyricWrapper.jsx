import React from 'react';
import LyricsOvh from 'lyricsovh-lib';
import './LyricWrapper.scss';
import LyricList from './LyricList/LyricList';
import LyricLetter from './LyricLetter/LyricLetter';

class LyricWrapper extends React.Component {
    constructor(props) {
        super(props);

        console.log("Lyric wrapper criado");

        this.state = {
            songList: [],
            songLetter: "",
            lyricapi: new LyricsOvh()
        };

        this.handleMusicSelected = this.handleMusicSelected.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log("Lyric Wrapper - update", this.props.searchWord);

        if (prevProps.searchWord !== this.props.searchWord) {
            this.setState({
                songLetter: ""
            });
            if (this.props.searchWord !== "") {
                this.state.lyricapi
                    .getSuggest(this.props.searchWord)
                    .then(res => this.setState({ songList: res.data }));
            } else {
                this.setState({
                    songList: []
                });
            }
        }
    }

    handleMusicSelected(song) {
        console.log(song);
        this.state.lyricapi
            .getLyric(song.artist.name, song.title)
            .then(res => {
                this.setState({
                    songLetter: res.error ? "Música não encontrada" : res.lyrics
                });
            });
    }

    handleBackButton() {
        this.setState({
            songLetter: ""
        });
    }

    render() {
        return (
            //If ternário {this.state.songList.length > 0 && <LyricList />}
            <div className="lyricWrapper">

                {this.state.songLetter !== "" ? (
                    <LyricLetter songLetter={this.state.songLetter} handleBackButton={this.handleBackButton} />
                ) : (
                        <LyricList songList={this.state.songList} handleMusicSelected={this.handleMusicSelected} />
                    )}
            </div>
        );
    }
}

export default LyricWrapper;