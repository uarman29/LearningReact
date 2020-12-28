import React from 'react';
import SearchBarComponent from './SearchBarComponent';
import youtube from '../apis/youtube';
import VideoListComponent from './VideoListComponent';
import VideoDetailComponent from './VideoDetailComponent';

class App extends React.Component
{
    state = {videos: [], selectedVideo: null};

    componentDidMount()
    {
        this.onSubmit('buildings');
    }

    onSubmit = async (inputTerm) =>
    {
        const response = await youtube.get('/search', { 
            params:
            {
                q: inputTerm
            }
        });
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) =>
    {
        this.setState({selectedVideo: video});
    }

    render()
    {
        return(
            <div className = "ui container">
                <SearchBarComponent onCallback = {this.onSubmit}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetailComponent video={this.state.selectedVideo} />
                        </div>
                        <div className = "five wide column">
                            <VideoListComponent onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;