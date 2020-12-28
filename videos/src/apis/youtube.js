import axios from 'axios';

const KEY = 'AIzaSyDE1WmR2YfF14nfEMhnJyP3OsCQnVOvv8k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:
    {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
