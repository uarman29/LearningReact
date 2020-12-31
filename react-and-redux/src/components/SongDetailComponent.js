import React from 'react';
import { connect } from 'react-redux';

const SongDetailComponent = (props) =>{
    if(!props.song)
        return <div> Select a song </div>;

    return(
        <div>
            <h3>Details for:</h3>
            <p>Title: {props.selectedSong.title}</p>
            <p>Duration: {props.selectedSong.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {selectedSong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetailComponent);