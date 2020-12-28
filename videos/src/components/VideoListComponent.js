import React from 'react';
import VideoItemComponent from './VideoItemComponent';

const VideoListComponent = (props) =>{
    const renderedVideos = props.videos.map((video) => {
        return <VideoItemComponent onVideoSelect = {props.onVideoSelect} video={video} key={video.id.videoId}/>
    });

    return(
        <div className = "ui relaxed divided list">{renderedVideos}</div>
    );
};

export default VideoListComponent;