import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID PS5wu3iOMIoC8FVen4M0RvjwVLtUjT-r8ZDcLA8Cmtk"
    }
});