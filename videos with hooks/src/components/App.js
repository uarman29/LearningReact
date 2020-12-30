import React, { useState, useEffect } from 'react';
import SearchBarComponent from './SearchBarComponent';
import VideoListComponent from './VideoListComponent';
import VideoDetailComponent from './VideoDetailComponent';
import useVideos from '../hooks/useVideos';

const App = () =>{
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    }, [videos]);

    return(
        <div className = "ui container">
            <SearchBarComponent onCallback = {search}/>
            <div className = "ui grid">
                <div className = "ui row">
                    <div className = "eleven wide column">
                        <VideoDetailComponent video={selectedVideo} />
                    </div>
                    <div className = "five wide column">
                        <VideoListComponent onVideoSelect = {setSelectedVideo} videos = {videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;